import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Game } from './game.entity';

@Entity('game-image')
export class GameImage {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @ManyToOne(type => Game, game => game.GameImage)
  game: Game;

  @Column()
  link: string;
}

// export default GameImage;