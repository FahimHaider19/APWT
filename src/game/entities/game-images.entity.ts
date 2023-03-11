import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Game } from './game.entity';

@Entity('game-images')
export class GameImages {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @ManyToOne(type => Game, game => game.gameImages)
  game: Game;

  @Column()
  link: string;
}

// export default GameImages;