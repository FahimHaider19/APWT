import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, UseFilters } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsDto } from './dto/news.dto';
// import { CustomExceptionFilter } from 'src/custom.exception.filter';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  // @UseFilters(CustomExceptionFilter)
  create(@Body() NewsDto: NewsDto) {
    return this.newsService.create(NewsDto);
  }

  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() NewsDto: NewsDto) {
    return this.newsService.update(+id, NewsDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.remove(+id);
  }
}
