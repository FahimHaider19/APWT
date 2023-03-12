import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game } from './entities/game.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameImage } from './entities/game-image.entity';
import { Review } from 'src/review/entities/review.entity';
import { GameCategory } from './entities/game-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game, GameImage, GameCategory, Review]),
    TypeOrmModule.forFeature([]),
    TypeOrmModule.forFeature([Review])],
  controllers: [GameController],
  providers: [GameService],
  exports: [GameService]
})
export class GameModule {}
