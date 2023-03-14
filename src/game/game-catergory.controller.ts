import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GameCategoryService } from './game-category.service';
import { GameCategoryDto } from './dto/game-category.dto';

@Controller('game-Category')
export class GameCategoryController {
    constructor(private readonly gameCategoryService: GameCategoryService) { }

    @Post()
    create(@Body() GameCategoryDto: GameCategoryDto) {
        return this.gameCategoryService.create(GameCategoryDto);
    }

    @Get()
    findAll() {
        return this.gameCategoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.gameCategoryService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() GameCategoryDto: GameCategoryDto) {
        return this.gameCategoryService.update(+id, GameCategoryDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.gameCategoryService.remove(+id);
    }
}
