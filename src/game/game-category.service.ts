import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameCategoryDto } from './dto/game-category.dto';
import { GameCategory } from './entities/game-category.entity';

@Injectable()
export class GameCategoryService {
    constructor(
        @InjectRepository(GameCategory)
        private GameCategoryRepo: Repository<GameCategory>,
    ) { }

    create(gameCategoryDto: GameCategoryDto) {
        const gameCategory = new GameCategoryDto();
        gameCategory.categoryName = gameCategoryDto.categoryName;
        return this.GameCategoryRepo.save(gameCategory);
    }

    findAll() {
        return this.GameCategoryRepo.find();
    }

    findOne(id) {
        return this.GameCategoryRepo.findOne(id);
    }

    update(id, gameCategoryDto: GameCategoryDto) {
        const gameCategory = new GameCategoryDto();
        gameCategory.categoryName = gameCategoryDto.categoryName;
        return this.GameCategoryRepo.update(id, gameCategory);
    }

    remove(id: number) {
        return this.GameCategoryRepo.delete(id);
    }
}
