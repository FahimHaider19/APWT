import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentController } from './payment.controller';
import { Payment } from './entities/payment.entity';
import { PaymentService } from './payment.service';
import { PurchaseLog } from './entities/purchase-log.entity';
import { PurchaseLogService } from './purchase-log.service';
import { PurchaseLogController } from './purchase-log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, PurchaseLog])],
  controllers: [PaymentController, PurchaseLogController],
  providers: [PaymentService, PurchaseLogService],
})
export class PaymentModule {}
