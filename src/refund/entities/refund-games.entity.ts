import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Refund } from './refund.entity';

@Entity('refund_games')
export class RefundGames {
  @PrimaryGeneratedColumn()
  refundGameId: number;

  @ManyToOne(() => Refund, (refund) => refund.refundItems)
  refund: Refund;

  @ManyToOne(() => Game)
  game: Game;

}

// export default GameImage;
