import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/customer/entity/Customer.entity';
import { Game } from 'src/game/entities/game.entity';
import { Repository } from 'typeorm';
import { RefundDto } from './dto/refund.dto';
import { Refund } from './entities/refund.entity';

@Injectable()
export class RefundService {
  constructor(
    @InjectRepository(Refund)
    private RefundRepo: Repository<Refund>
  ) { }
  
  create(refundDto: RefundDto) {
    const refund = new Refund();
    refund.refundDate = refundDto.refundDate;
    refund.refundTotal = refundDto.refundTotal;
    refund.status = refundDto.status;
    // refund.customer = new Customer();
    // refund.customer.userId = refundDto.cusomer.userId;
    refund.refundItem = new Game();
    refund.refundItem.gameId = refundDto.refundItem.gameId;
    return this.RefundRepo.save(refund);
  }

  findAll() {
    return this.RefundRepo.find();
  }

  findOne(id) {
    return this.RefundRepo.findOne(id);
  }

  update(id: number, refundDto: RefundDto) {
    const refund = new Refund();
    refund.refundDate = refundDto.refundDate;
    refund.refundTotal = refundDto.refundTotal;
    refund.status = refundDto.status;
    return this.RefundRepo.update(id, refund);
  }

  async acceptRefund(id) {
    const refund = await this.RefundRepo.findOne(id);
    refund.status = "Accepted";
    //remove game from customer's library and add money to customer's wallet
    return this.RefundRepo.update(id, refund);
  }

  async rejectRefund(id) {
    const refund = await this.RefundRepo.findOne(id);
    refund.status = "Rejected";
    return this.RefundRepo.update(id, refund);
  }

  remove(id: number) {
    return this.RefundRepo.delete(id);
  }
}
