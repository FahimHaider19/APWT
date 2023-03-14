import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('file-upload')
export class FileUploadEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  fileName: string;;
}
