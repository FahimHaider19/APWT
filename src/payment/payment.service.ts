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
    return this.PaymentRepo.find(id);
  }

  getVerificationByID(id): any {
    return this.PaymentRepo.findOne({
      select: ['verificationStatus'],
      where: { userId: id },
    });
  }

  getPaymentByIDName(qry): any {
    if (qry.id) {
      return this.PaymentRepo.find(qry.id);
    } 
    // else if (qry.name) {
    //   return this.PaymentRepo.findOne({ where: { name: qry.name } });
    // }  
}

  AddPayment(paymentDTO: PaymentDTO): any {
    const payment = new Payment();
    payment.userId = paymentDTO.userId;
    payment.amount = paymentDTO.amount;
    payment.date = paymentDTO.date;
    payment.verificationStatus = paymentDTO.verificationStatus;
    return this.PaymentRepo.save(payment);
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

  RefundPayment(id): any {
    return 'Payment ID:' + id + ' Refunded.';
  }

  TradePaymentTransfer(qry): any {
    return (
      'Trade=> From:' + qry.from + ', To:' + qry.to + ', Amount:' + qry.amount
    );
  }

  ItemListing(qry): any {
    return 'Item Name:' + qry.item + ', Price:' + qry.price;
  }

  getUserPayments(name): any {
    return 'Payment list of user:' + name;
  }
}
