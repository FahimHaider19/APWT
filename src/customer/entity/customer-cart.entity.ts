import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from './Customer.entity';

@Entity('customer-cart')
export class Cart {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @ManyToOne((type) => Customer, (customer) => customer.cart)
  customer: Customer;

  @OneToMany((type) => Game, (game) => game.cart)
  game: Game[];
}
