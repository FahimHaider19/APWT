import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Customer } from './Customer.entity';

@Entity('customer-wishlist')
export class Wishlist {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @OneToOne((type) => Customer, (customer) => customer.library)
  customer: Customer;

  @OneToMany((type) => Game, (game) => game.wishlist)
  game: Game[];
}
