import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Customer } from './Customer.entity';

@Entity('customer-cart')
export class Cart {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @OneToOne((type) => Customer, (customer) => customer.library)
  customer: Customer;

  @OneToMany((type) => Game, (games) => games.cart)
  game: Game[];
}
