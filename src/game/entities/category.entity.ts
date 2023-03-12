import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column()
    categoryName: string;

    @ManyToOne((type) => Game, (game) => game.gameCategory)
    game: Game;
}
