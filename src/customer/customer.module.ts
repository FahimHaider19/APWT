import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from 'src/review/entities/review.entity';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Cart } from './entity/customer-cart.entity';
import { Library } from './entity/customer-library.entity';
import { Wishlist } from './entity/customer-wishlist.entity';
import { Customer } from './entity/Customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]),
    TypeOrmModule.forFeature([Review]),
    TypeOrmModule.forFeature([Library]),
    TypeOrmModule.forFeature([Cart]),
    TypeOrmModule.forFeature([Wishlist])],
    
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
