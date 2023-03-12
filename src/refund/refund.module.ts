import { Module } from '@nestjs/common';
import { RefundService } from './refund.service';
import { RefundController } from './refund.controller';
import { Refund } from './entities/refund.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefundGames } from './entities/refund-games.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Refund]),
    TypeOrmModule.forFeature([RefundGames])],
  controllers: [RefundController],
  providers: [RefundService]
})
export class RefundModule {}
