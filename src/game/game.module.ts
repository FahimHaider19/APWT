import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game } from './entities/game.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameImages } from './entities/game-image.entity';
import { Review } from 'src/review/entities/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game]),
    TypeOrmModule.forFeature([GameImages]),
    TypeOrmModule.forFeature([Review])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
