import { Customer } from 'src/customer/entity/Customer.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { RefundGames } from './refund-games.entity';

@Entity('refunds')
export class Refund {
  @PrimaryGeneratedColumn()
  refundId: number;

  @ManyToOne(() => Customer)
  customer: Customer; //many to one relationship

  @Column()
  refundDate: Date;

  @Column()
  refundTotal: number;

  @OneToMany(() => RefundGames, (refundGames) => refundGames.refund)
  refundItems: RefundGames[]; //many to one relationship

  @Column()
  status: string;
}
