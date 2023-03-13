import { Customer } from 'src/customer/entity/Customer.entity';
import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('refunds')
export class Refund {
  @PrimaryGeneratedColumn()
  refundId: number;

  // @ManyToOne(() => Customer, customer => customer.refunds)
  // customer: Customer;

  @Column()
  refundDate: Date;

  @Column()
  refundTotal: number;

  @OneToOne(()=> Game)
  @JoinColumn()
  refundItem: Game;

  @Column()
  status: string;
}
