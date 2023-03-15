import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { GameCategoryService } from './game-category.service';
import { GameCategoryDto } from './dto/game-category.dto';
import { JwtAuthGuard } from 'src/auth/jwt.gaurd';
import { Roles } from 'src/auth/roles.decorator';
import { SessionGaurd } from 'src/auth/session.gaurd';

@Controller('game-Category')
export class GameCategoryController {
    constructor(private readonly gameCategoryService: GameCategoryService) { }

    @Post()
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    @UsePipes(new ValidationPipe())
    create(@Body() GameCategoryDto: GameCategoryDto) {
        return this.gameCategoryService.create(GameCategoryDto);
    }

    @Get()
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    findAll() {
        return this.gameCategoryService.findAll();
    }

    @Get(':id')
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.gameCategoryService.findOne(+id);
    }

    @Put(':id')
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    @UsePipes(new ValidationPipe())
    update(@Param('id', ParseIntPipe) id: number, @Body() GameCategoryDto: GameCategoryDto) {
        return this.gameCategoryService.update(+id, GameCategoryDto);
    }

    @Delete(':id')
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.gameCategoryService.remove(+id);
    }
}
