import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Customer } from './Customer.entity';

@Entity('game-library')
export class Library {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @OneToOne((type) => Customer, (customer) => customer.library)
  customer: Customer;

  @OneToMany((type) => Game, (game) => game.library)
  game: Game[];
}
