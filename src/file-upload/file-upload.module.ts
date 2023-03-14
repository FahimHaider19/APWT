import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { FileUploadEntity } from './entities/file-upload.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FileUploadEntity])],
  controllers: [FileUploadController],
  providers: [FileUploadService]
})
export class FileUploadModule {}
