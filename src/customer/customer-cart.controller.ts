import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { cartService } from "./customer-cart.service";
import { cartDTO } from "./dto/customer-cart.dto";
import { SessionGuard } from "./session.guard";

@UseGuards(SessionGuard)
@Controller('cart')
export class cartController {
  constructor(private cartService: cartService,
    private managerService: cartService
    ) {}

  @Get('/index')
  getcart(): any {
    return this.cartService.getIndex();
  }
  
  @Get('/findcart/:id')
  getcartByID(@Param('id', ParseIntPipe) id: number): any {
    return this.cartService.getUserByID(id);
  }

  @Get('/findcart/:name')
  getcartByIDName(@Body() name: any): any {
    return this.cartService.getUserByIDName(name);
  }
  @Post('/insertcart')
@UsePipes(new ValidationPipe())
  insertcart(@Body() mydto:cartDTO): any {
    return this.cartService.insertUser(mydto);
  }
  @Put('/updatecart/:id')
  @UsePipes(new ValidationPipe())
  updatecartbyid(
    @Body() mydto: cartDTO,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.cartService.updateUserbyid(mydto, id);
  }
}