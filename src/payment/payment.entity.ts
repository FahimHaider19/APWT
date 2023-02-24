import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('payment')
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  paymentId: number;

  @Column()
  userId: number;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @Column()
  paymentTo: number;

  @Column()
  verificationStatus: string;
}
