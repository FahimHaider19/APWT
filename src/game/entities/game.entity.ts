import { GameCategory } from 'src/game/entities/game-category.entity';
import { News } from 'src/news/entities/news.entity';
import { Review } from 'src/review/entities/review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GameImage } from './game-image.entity';

@Entity('game')
export class Game {
  @PrimaryGeneratedColumn()
  gameId: number;

  @Column()
  gameName: string;

  @Column()
  gameDescription: string;

  @Column()
  gamePrice: number;

  @Column()
  discount: number;

  @Column()
  gameRating: number;

  @Column()
  gameReleaseDate: Date;

  // @Column()
  // gameDeveloper: string;

  @Column()
  gamePublisher: string; //object....many to one

  @Column()
  gameGenre: string;

  @Column()
  systemRequirments: string;

  @OneToMany((type) => GameCategory, (gameCategory) => gameCategory.game)
  gameCategory: GameCategory[];

  @OneToMany((type) => GameImage, (GameImage) => GameImage.game, {cascade: true})
  GameImage: GameImage[];

  @OneToMany((type) => News, (gameNews) => gameNews.game)
  gameNews: News[];

  @OneToMany((type) => Review, (gameReviews) => gameReviews.game)
  gameReviews: Review[];

  @Column()
  isDlc: boolean;

  @Column()
  prerequisit: number; //inner table relationship, another game
}

// export default Game;
