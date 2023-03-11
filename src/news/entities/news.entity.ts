import { Game } from 'src/game/entities/game.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('news')
export class News {
    @PrimaryGeneratedColumn()
    newsId: number;
    
    @Column()
    newsTitle: string;
    
    @Column()
    newsDescription: string;
    
    @Column()
    newsImage: string;
    
    @Column()
    newsDate: Date;
    
    @ManyToOne(type => Game, game => game.gameNews)
    game: Game; // This should be a foreign key to the game table
}
