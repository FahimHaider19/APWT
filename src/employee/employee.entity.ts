import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("employee")
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({nullable: true})
  verificationStatus: boolean;
}
