import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsDto } from './dto/news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private NewsRepo: Repository<News>,
  ) { }

  create(newsDto: NewsDto) {
    // const news = new News();
    // news.newsTitle = newsDto.newsTitle;
    // news.newsDescription = newsDto.newsDescription;
    // news.newsDate = newsDto.newsDate;
    return this.NewsRepo.save(newsDto);
  }

  findAll() {
    return this.NewsRepo.find();
  }

  findOne(id) {
    return this.NewsRepo.find();
  }

  update(id, newsDto: NewsDto) {
    // const news = new News();
    // news.newsTitle = newsDto.newsTitle;
    // news.newsDescription = newsDto.newsDescription;
    // news.newsDate = newsDto.newsDate;
    return this.NewsRepo.update(id, newsDto);
  }

  remove(id: number) {
    return this.NewsRepo.delete(id);
  }
}
