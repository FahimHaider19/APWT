import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, Column, ManyToOne } from 'typeorm';
import { Customer } from './Customer.entity';

@Entity('game-library')
export class Library {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  @Column()
  stock:number;

  @OneToOne((type) => Customer, (customer) => customer.library)
  customer: Customer;

  @ManyToOne((type) => Game, (game) => game.library)
  game: Game;
}
