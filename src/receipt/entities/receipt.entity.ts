import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ReceiptItems } from './receipt-items.entity';

@Entity('receipts')
export class Receipt {
    @PrimaryGeneratedColumn()
    receiptId: number;

    @Column()
    userId: number; //one user can have many receipts

    @Column()
    receiptDate: Date;

    @Column()
    receiptTotal: number;

    @OneToMany(type => ReceiptItems, receiptItems => receiptItems.receipt)
    receiptItems: ReceiptItems[]; //many to one relationship
}
