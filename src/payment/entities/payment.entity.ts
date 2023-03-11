import { Customer } from 'src/customer/entity/Customer.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { User } from 'src/user/entities/user.entity';

@Entity('payment')
export class Payment {
  @PrimaryGeneratedColumn()
  paymentId: number;

  @ManyToOne(type => Customer, customer => customer.payments)
  customer: Customer;

  @Column()
  userId: number;

  @Column()
  paymentMethod: string;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @Column()
  verificationStatus: string;
}
