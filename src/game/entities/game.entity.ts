import { libraryService } from 'src/customer/customer-library.service';
import { Cart } from 'src/customer/entity/customer-cart.entity';
import { Library } from 'src/customer/entity/customer-library.entity';
import { Wishlist } from 'src/customer/entity/customer-wishlist.entity';
import { GameCategory } from 'src/game/entities/game-category.entity';
import { News } from 'src/news/entities/news.entity';
import { Review } from 'src/review/entities/review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
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
  systemRequirments: string;

  @OneToMany((type) => GameCategory, (gameCategory) => gameCategory.game)
  gameCategory: GameCategory[];

  @OneToMany((type) => GameImage, (GameImage) => GameImage.game, {cascade: true})
  gameImage: GameImage[];

  @OneToMany((type) => News, (gameNews) => gameNews.game)
  gameNews: News[];

  @OneToMany((type) => Review, (gameReviews) => gameReviews.game)
  gameReviews: Review[];

  @OneToMany((type) => Library, (library) => library.game)
  library: Library[];

  @OneToMany((type) => Cart, (cart) => cart.game)
  cart: Cart[];

  
 @OneToMany((type) => Wishlist, (wishlist) => wishlist.game)
  wishlist: Wishlist[];
  
  @Column({nullable: true})
  isDlc: boolean;

  @Column({nullable: true})
  prerequisit: number; //inner table relationship, another game
}

// export default Game;
