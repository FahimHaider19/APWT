import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameImageDto } from './dto/game-image.dto';
import { GameImage } from './entities/game-image.entity';

@Injectable()
export class GameImageService {
    constructor(
        @InjectRepository(GameImage)
        private GameImageRepo: Repository<GameImage>,
    ) { }

    create(gameImageDto: GameImageDto) {
        const gameImage = new GameImage();
        gameImage.link = gameImageDto.link;
        return this.GameImageRepo.save(gameImage);
    }

    findAll() {
        return this.GameImageRepo.find();
    }

    findOne(id) {
        return this.GameImageRepo.findOne(id);
    }

    update(id, gameImageDto: GameImageDto) {
        // const gameImage = new GameImageDto();
        // gameImage.link = gameImageDto.link;
        return this.GameImageRepo.update(id, gameImageDto);
    }

    remove(id: number) {
        return this.GameImageRepo.delete(id);
    }
}
