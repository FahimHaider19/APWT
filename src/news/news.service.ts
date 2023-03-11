import { Injectable } from '@nestjs/common';
import { NewsDto } from './dto/news.dto';

@Injectable()
export class NewsService {
  create(NewsDto: NewsDto) {
    return 'This action adds a new news';
  }

  findAll() {
    return `This action returns all news`;
  }

  findOne(id: number) {
    return `This action returns a #${id} news`;
  }

  update(id: number, updateNewsDto: NewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
