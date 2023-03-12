import { Customer } from 'src/customer/entity/Customer.entity';
import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    reviewId: number;

    @ManyToOne(() => Customer)
    customer: Customer; //one user can have many reviews

    @ManyToOne(() => Game)
    game: Game; //one game can have many reviews


    @Column()
    reviewDate: Date;

    @Column()
    reviewRating: number;

    @Column()
    reviewText: string;

    @Column()
    reviewTitle: string;
}
