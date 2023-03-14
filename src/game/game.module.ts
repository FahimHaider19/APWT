import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game } from './entities/game.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameImage } from './entities/game-image.entity';
import { Review } from 'src/review/entities/review.entity';
import { GameCategory } from './entities/game-category.entity';
import { GameImageController } from './game-image.controller';
import { GameImageService } from './game-image.service';
import { GameCategoryService } from './game-category.service';
import { GameCategoryController } from './game-catergory.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Game, GameImage, GameCategory, Review]),],
  controllers: [GameController, GameImageController, GameCategoryController],
  providers: [GameService, GameImageService, GameCategoryService],
  exports: [GameService]
})
export class GameModule {}
