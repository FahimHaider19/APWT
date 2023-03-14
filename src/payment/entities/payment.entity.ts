import { Customer } from 'src/customer/entity/Customer.entity';
import { PurchaseLog } from 'src/payment/entities/purchase-log.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('payment')
export class Payment {
  @PrimaryGeneratedColumn()
  paymentId: number;

  @ManyToOne(type => Customer, customer => customer.payments)
  customer: Customer;

  @Column()
  paymentMethod: string;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @Column()
  verificationStatus: string;

  @OneToMany((type) => PurchaseLog, (purchaseLog) => purchaseLog.payment, {cascade: true})
  purchaseLogs: PurchaseLog[];
}
