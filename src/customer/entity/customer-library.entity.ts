import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Customer } from './Customer.entity';

@Entity('game-library')
export class Library {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @ManyToOne((type) => Customer, (customer) => customer.library)
  customer: Customer;

  @ManyToOne((type) => Game)
  game: Game;
}
