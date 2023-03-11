import { Payment } from 'src/payment/entities/payment.entity';
import { Review } from 'src/review/entities/review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cart } from './customer-cart.entity';
import { Library } from './customer-library.entity';
import { Wishlist } from './customer-wishlist.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ default: 'customer' })
  role: string;

  @Column()
  verificationStatus: string;

  @OneToMany(type => Library, library => library.customer)
  library: Library;
 
  @OneToMany(type => Wishlist, wishlist => wishlist.customer)
  wishlist: string;
  
  @OneToMany(type => Cart, cart => cart.customer)
  cart: string;
  
  @OneToMany(type => Payment, payments => payments.customer)
  payments: string;

  @OneToMany(type => Review, review => review.customer)
  reviews: Review;
}
