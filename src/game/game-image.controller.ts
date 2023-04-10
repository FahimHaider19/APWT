import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, UseGuards, ValidationPipe, UsePipes } from '@nestjs/common';
import { GameImageService } from './game-image.service';
import { GameImageDto } from './dto/game-image.dto';
import { SessionGaurd } from 'src/auth/session.gaurd';
import { JwtAuthGuard } from 'src/auth/jwt.gaurd';
import { Roles } from 'src/auth/roles.decorator';
import { GameImage } from './entities/game-image.entity';

@Controller('game-image')
export class GameImageController {
    constructor(private readonly gameImageService: GameImageService) { }

    @Post()
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    // @UsePipes(new ValidationPipe())
    create(@Body() GameImageDto: GameImageDto) {
        const game = new GameImage();
        game.link = GameImageDto.link;
        return this.gameImageService.create(game);
    }

    @Get() 
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    findAll() {
        return this.gameImageService.findAll();
    }

    @Get(':id')
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.gameImageService.findOne(+id);
    }

    @Put(':id')
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    @UsePipes(new ValidationPipe())
    update(@Param('id', ParseIntPipe) id: number, @Body() GameImageDto: GameImageDto) {
        return this.gameImageService.update(+id, GameImageDto);
    }

    @Delete(':id')
    @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
    @Roles("employee")
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.gameImageService.remove(+id);
    }
}
