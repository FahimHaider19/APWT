import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from 'src/game/entities/game.entity';
import { PurchaseLog } from 'src/payment/entities/purchase-log.entity';
import { Review } from 'src/review/entities/review.entity';
import { cartController } from './customer-cart.controller';
import { cartService } from './customer-cart.service';
import { libraryController } from './customer-library.controller';
import { libraryService } from './customer-library.service';
import { wishlistController } from './customer-wishlist.controller';
import { wishlistService } from './customer-wishlist.service';

import { customerController } from './customer.controller';
import { customerService } from './customer.service';
import { Cart } from './entity/customer-cart.entity';
import { Library } from './entity/customer-library.entity';
import { Wishlist } from './entity/customer-wishlist.entity';
import { Customer } from './entity/Customer.entity';

@Module({
  imports: [MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
               port: 465,
               ignoreTLS: true,
               secure: true,
               auth: {
                   user: 'asifnexus19999@gmail.com',
                   pass: 'xlvxnstyaqgwjosd'
               },
              }
  }),TypeOrmModule.forFeature([Customer, Review, Library, Cart, Wishlist,Game, PurchaseLog]),],    
  controllers: [customerController,cartController,libraryController,wishlistController],
  providers: [customerService,cartService,libraryService,wishlistService],
  exports: [customerService],
})
export class CustomerModule {}
