import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from './Customer.entity';

@Entity('game-library')
export class Library {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @ManyToOne((type) => Customer, (customer) => customer.library)
  customer: Customer;

  @OneToMany((type) => Game, (game) =>game.library)
  game: Game[];
}
