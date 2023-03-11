import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryDto } from './dto/category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private CategoryRepo: Repository<Category>,
  ) {}
  
  create(CategoryDto: CategoryDto) {
    const category = new Category();
    category.categoryName = CategoryDto.categoryName;
  }

  findAll() {
    return this.CategoryRepo.find();
  }

  findOne(id) {
    return this.CategoryRepo.find(id);
  }

  update(id: number, categoryDto: CategoryDto) {
    const category = new Category();
    category.categoryName = categoryDto.categoryName;
    return this.CategoryRepo.update(id, category);
  }

  remove(id: number) {
    return this.CategoryRepo.delete(id);
  }
}
