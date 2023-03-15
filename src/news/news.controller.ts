import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsDto } from './dto/news.dto';
import { JwtAuthGuard } from 'src/auth/jwt.gaurd';
import { Roles } from 'src/auth/roles.decorator';
import { SessionGaurd } from 'src/auth/session.gaurd';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  create(@Body() NewsDto: NewsDto) {
    return this.newsService.create(NewsDto);
  }

  @Get()
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  @UsePipes(new ValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() NewsDto: NewsDto) {
    return this.newsService.update(+id, NewsDto);
  }

  @Delete(':id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.remove(+id);
  }
}
