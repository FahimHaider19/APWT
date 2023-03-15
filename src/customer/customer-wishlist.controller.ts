import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { wishlistService } from "./customer-wishlist.service";
import { wishlistDTO } from "./dto/customer-wishlist.dto";
import { SessionGuard } from "./session.guard";


@UseGuards(SessionGuard)
@Controller('wishlist')
export class wishlistController {
  constructor(private wishlistService:wishlistService,
    private managerService: wishlistService
    ) {}

  @Get('/index')
  getwishlist(): any {
    return this.wishlistService.getIndex();
  }
  
  @Get('/findwishlist/:id')
  getwishlistByID(@Param('id', ParseIntPipe) id: number): any {
    return this.wishlistService.getUserByID(id);
  }

  @Get('/findwishlist/:name')
  getwishlistByIDName(@Body() name: any): any {
    return this.wishlistService.getUserByIDName(name);
  }
  @Post('/insertwishlist')
@UsePipes(new ValidationPipe())
  insertwishlist(@Body() mydto:wishlistDTO): any {
    return this.wishlistService.insertUser(mydto);
  }
  @Put('/updatewishlist/:id')
  @UsePipes(new ValidationPipe())
  updatewishlistbyid(
    @Body() mydto: wishlistDTO,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.wishlistService.updateUserbyid(mydto, id);
  }
}