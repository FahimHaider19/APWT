import { Body, Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileUploadDto } from './dto/file-upload.dto';
import { FileUploadService } from './file-upload.service';

@Controller('fileupload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploaded-files',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  )
  FileUpload(
    @Body() uploadedFile: FileUploadDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 160000 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' })
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    uploadedFile.fileName = file.filename;
    return this.fileUploadService.insertFileUpload(uploadedFile);
  }
}
