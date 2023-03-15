import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { libraryService } from "./customer-library.service";
import { LibraryDTO } from "./dto/customer-library.dto";
import { SessionGuard } from "./session.guard";

@UseGuards(SessionGuard)
@Controller('library')
export class libraryController {
  constructor(private libraryService: libraryService,
    private managerService: libraryService
    ) {}

  @Get('/index')
  getlibrary(): any {
    return this.libraryService.getIndex();
  }
  
  @Get('/findlibrary/:id')
  getlibraryByID(@Param('id', ParseIntPipe) id: number): any {
    return this.libraryService.getUserByID(id);
  }

  @Get('/findlibrary/:name')
  getlibraryByIDName(@Body() name: any): any {
    return this.libraryService.getUserByIDName(name);
  }
  @Post('/insertlibrary')
@UsePipes(new ValidationPipe())
  insertlibrary(@Body() mydto:LibraryDTO): any {
    return this.libraryService.insertUser(mydto);
  }
  @Put('/updatelibrary/:id')
  @UsePipes(new ValidationPipe())
  updatelibrarybyid(
    @Body() mydto: LibraryDTO,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.libraryService.updateUserbyid(mydto, id);
  }
}