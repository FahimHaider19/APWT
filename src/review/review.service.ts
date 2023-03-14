import { Injectable } from '@nestjs/common';
import { ReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
  create(ReviewDto: ReviewDto) {
    return 'This action adds a new review';
  }

  findAll() {
    return `This action returns all review`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: ReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
