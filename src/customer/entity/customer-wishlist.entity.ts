import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Customer } from './Customer.entity';

@Entity('game-images')
export class Wishlist {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @ManyToOne((type) => Customer, (customer) => customer.wishlist)
  customer: Customer;

  @ManyToOne((type) => Game)
  game: Game;
}
