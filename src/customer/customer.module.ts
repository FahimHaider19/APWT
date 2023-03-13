import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseLog } from 'src/payment/entities/purchase-log.entity';
import { Review } from 'src/review/entities/review.entity';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Cart } from './entity/customer-cart.entity';
import { Library } from './entity/customer-library.entity';
import { Wishlist } from './entity/customer-wishlist.entity';
import { Customer } from './entity/Customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Review, Library, Cart, Wishlist, PurchaseLog]),],    
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
