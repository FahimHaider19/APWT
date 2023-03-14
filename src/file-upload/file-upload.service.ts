import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileUploadDto } from './dto/file-upload.dto';
import { FileUploadEntity } from './entities/file-upload.entity';

@Injectable()
export class FileUploadService {
    constructor(
        @InjectRepository(FileUploadEntity)
        private readonly fileUplodeRepo: Repository<FileUploadEntity>
    ) { }
    insertFileUpload(fileUploadDto : FileUploadDto): any {
        const file = new FileUploadEntity();
        file.fileName = fileUploadDto.fileName;
        return this.fileUplodeRepo.save(file);
    }
}
