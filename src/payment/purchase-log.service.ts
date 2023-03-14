import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseLogDto } from './dto/purchase-log.dto';
import { PurchaseLog } from './entities/purchase-log.entity';

@Injectable()
export class PurchaseLogService {
  constructor(
    @InjectRepository(PurchaseLog)
    private purchaseLogRepo: Repository<PurchaseLog>,
  ) { }

  create(purchaseLogDto: PurchaseLogDto) {
    this.purchaseLogRepo.save(purchaseLogDto);
  }

  findAll() {
    return this.purchaseLogRepo.find();
  }

  findOne(id: number) {
    return this.purchaseLogRepo.findOne({ where: { purchaseLogId: id } });
  }

  update(id: number, purchaseLogDto: PurchaseLogDto) {
    return this.purchaseLogRepo.update(id, purchaseLogDto);
  }

  remove(id: number) {
    return this.purchaseLogRepo.delete(id);
  }
}
