import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Customer } from './Customer.entity';

@Entity('game-images')
export class Cart {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @ManyToOne((type) => Customer, (customer) => customer.cart)
  customer: Customer;

  @ManyToOne((type) => Game)
  game: Game;
}
