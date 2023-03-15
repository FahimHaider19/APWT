import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe, UsePipes } from '@nestjs/common';
import { GameService } from './game.service';
import { GameDto } from './dto/game.dto';
import { SessionGaurd } from 'src/auth/session.gaurd';
import { JwtAuthGuard } from 'src/auth/jwt.gaurd';
import { Roles } from 'src/auth/roles.decorator';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  @UsePipes(new ValidationPipe())
  create(@Body() GameDto: GameDto) {
    return this.gameService.create(GameDto);
  }

  @Get()
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  findAll() {
    return this.gameService.findAllInfo();
  }

  @Get('/details')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  findAllFull() {
    return this.gameService.findAll();
  }

  @Get('/details/:id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  findOneFull(@Param('id') id: number) {
    return this.gameService.findOne(+id);
  }

  @Get(':id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  findOne(@Param('id') id: number) {
    return this.gameService.findOneInfo(+id);
  }

  @Patch(':id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() GameDto: GameDto) {
    return this.gameService.update(+id, GameDto);
  }

  @Delete(':id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  remove(@Param('id') id: number) {
    return this.gameService.remove(+id);
  }
}
