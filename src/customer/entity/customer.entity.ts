import { Payment } from 'src/payment/entities/payment.entity';
import { PurchaseLog } from 'src/payment/entities/purchase-log.entity';
import { Review } from 'src/review/entities/review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
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

  @OneToOne(type => Library, library => library.customer)
  @JoinColumn()
  library: Library;
 
  @OneToOne(type => Wishlist, wishlist => wishlist.customer)
  @JoinColumn()
  wishlist: Wishlist;
  
  @OneToOne(type => Cart, cart => cart.customer)
  @JoinColumn()
  cart: Cart;
  
  @OneToMany(type => Payment, payments => payments.customer)
  payments: Payment[];

  @OneToMany(type => Review, review => review.customer)
  reviews: Review[];
  
  @OneToMany(type => PurchaseLog, purchaseLog => purchaseLog.customer)
  purchaseLogs: PurchaseLog[];
  @Column()
  filename:string;
}
