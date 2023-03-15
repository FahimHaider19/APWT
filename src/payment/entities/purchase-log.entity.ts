import { Customer } from "src/customer/entity/Customer.entity";
import { Payment } from "src/payment/entities/payment.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('purchase-log')
export class PurchaseLog {
    @PrimaryGeneratedColumn()
    purchaseLogId: number;

    @ManyToOne(type => Customer, customer => customer.purchaseLogs)
    customer: Customer;

    @Column()
    purchaseDate: Date;

    @Column()
    paidAmount: number;

    @ManyToOne(type => Payment, payment => payment.purchaseLogs, {onDelete: 'CASCADE'})
    payment: Payment;
}
