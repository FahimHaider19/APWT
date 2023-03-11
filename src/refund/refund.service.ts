import { Injectable } from '@nestjs/common';
import { RefundDto } from './dto/refund.dto';

@Injectable()
export class RefundService {
  create(RefundDto: RefundDto) {
    return 'This action adds a new refund';
  }

  findAll() {
    return `This action returns all refund`;
  }

  findOne(id: number) {
    return `This action returns a #${id} refund`;
  }

  update(id: number, updateRefundDto: RefundDto) {
    return `This action updates a #${id} refund`;
  }

  remove(id: number) {
    return `This action removes a #${id} refund`;
  }
}
