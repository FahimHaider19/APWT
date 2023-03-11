import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Receipt } from './receipt.entity';

@Entity('product-prices')
export class ReceiptItems {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @ManyToOne(type => Receipt, receipt => receipt.receiptItems)
  receipt: Receipt;

  @ManyToOne(type => Game)
  game: Game;

  @Column()
  price: number;
}

// export default GameImages;
