import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from "./entities/payment.entity";
import { PaymentDTO } from "./dto/paymentDTO.dto";

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private PaymentRepo: Repository<Payment>,
  ) {}

  getIndex(): any {
    return this.PaymentRepo.find();
  }

  getPaymentByID(id): any {
    return this.PaymentRepo.findOne({ where: { paymentId: id } });
  }

  getVerificationByID(id): any {
    return this.PaymentRepo.findOne({
      select: ['verificationStatus'],
      // where: { userId: id },
    });
  }

  AddPayment(paymentDTO: PaymentDTO): any {
    const payment = new Payment();
    return this.PaymentRepo.save(paymentDTO);
  }

  

  updatePayment(paymentDTO, id): any {
    return this.PaymentRepo.update(id, paymentDTO);
  }

  updatePaymentById(paymentDTO, id): any {
    return this.PaymentRepo.update(id, paymentDTO);
  }

  deletePaymentById(id): any {
    return this.PaymentRepo.delete(id);
  }

  // getUserPayments(id): any {
  //   return this.PaymentRepo.find({ where: { userId: id } });
  // }
}
