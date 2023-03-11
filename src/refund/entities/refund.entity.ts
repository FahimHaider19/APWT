import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RefundGames } from './refund-games.entity';

@Entity('refunds')
export class Refund {
  @PrimaryGeneratedColumn()
  refundId: number;

  @Column()
  userId: number; //one user can have many refunds

  //   @ManyToOne(() => User)
  //   user: User; //many to one relationship

  @Column()
  refundDate: Date;

  @Column()
  refundTotal: number;

  @OneToMany(() => RefundGames, (refundGames) => refundGames.refund)
  refundItems: RefundGames[]; //many to one relationship

  @Column()
  status: string;
}
