import { Body, Controller, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseIntPipe, Post, Put, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { customerService } from "./customer.service";
import { CustomerDTO } from "./dto/customer.dto";
import { diskStorage } from 'multer';
import { SessionGuard } from "./session.guard";


@Controller('customer')
export class customerController {
  constructor(private customerService: customerService,
    private managerService: customerService
    ) {}

  @Get('/index')
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  getcustomer(): any {
    return this.customerService.getIndex();
  }
  
  @Get('/findcustomer/:id')
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  getcustomerByID(@Param('id', ParseIntPipe) id: number): any {
    return this.customerService.getUserByID(id);
  }

  @Get('/findcustomer/:name')
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  getcustomerByIDName(@Body() name: any): any {
    return this.customerService.getUserByIDName(name);
  }
  @Post('/insertcustomer')
  @UseGuards(SessionGuard)
@UsePipes(new ValidationPipe())
  insertcustomer(@Body() mydto:CustomerDTO): any {
    return this.customerService.insertUser(mydto);
  }
  @Put('/updatecustomer/:id')
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  updatecustomerbyid(
    @Body() mydto: CustomerDTO,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.customerService.updateUserbyid(mydto, id);
  }






  @Post('/signup')
@UseInterceptors(FileInterceptor('myfile',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
signup(@Body() mydto:CustomerDTO,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 1600000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

mydto.filename = file.filename;  

return this.customerService.signup(mydto);
console.log(file)
}
@Get('/signin')
signin(@Session() session, @Body() mydto:CustomerDTO)
{
if(this.customerService.signin(mydto))
{
  session.email = mydto.email;

  console.log(session.email);
  return {message:"success"};

}
else
{
  return {message:"invalid credentials"};
}
 
}
@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"you are logged out"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}






  @Post('/sendemail')
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  sendEmail(@Body() mydata){
  return this.customerService.sendEmail(mydata);
  }

}
