import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { GameCategory } from 'src/game/entities/game-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GameCategory])],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule {}
