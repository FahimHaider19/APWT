import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameService } from './game.service';
import { GameDto } from './dto/game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() GameDto: GameDto) {
    return this.gameService.create(GameDto);
  }

  @Get()
  findAll() {
    return this.gameService.findAllInfo();
  }

  @Get('/details')
  findAllFull() {
    return this.gameService.findAll();
  }

  @Get('/details/:id')
  findOneFull(@Param('id') id: number) {
    return this.gameService.findOne(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gameService.findOneInfo(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() GameDto: GameDto) {
    return this.gameService.update(+id, GameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gameService.remove(+id);
  }
}
