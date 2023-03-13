import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GameImageService } from './game-image.service';
import { GameImageDto } from './dto/game-image.dto';

@Controller('game-image')
export class GameImageController {
    constructor(private readonly gameImageService: GameImageService) { }

    @Post()
    create(@Body() GameImageDto: GameImageDto) {
        return this.gameImageService.create(GameImageDto);
    }

    @Get()
    findAll() {
        return this.gameImageService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.gameImageService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() GameImageDto: GameImageDto) {
        return this.gameImageService.update(+id, GameImageDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.gameImageService.remove(+id);
    }
}
