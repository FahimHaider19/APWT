import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column()
    categoryName: string;
}
