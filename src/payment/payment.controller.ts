import { Controller, Get, Body, Delete, Param, Post, Put, Request, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.gaurd';
import { Roles } from 'src/auth/roles.decorator';
import { SessionGaurd } from 'src/auth/session.gaurd';
import { PaymentDTO } from './dto/paymentDTO.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private PaymentService: PaymentService) { }

  @Get("/")
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  getPayment(): any {
    return this.PaymentService.getIndex();
  }

  @Get("/:id")
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  getPaymentByID(@Param("id") id: number): any {
    return this.PaymentService.getPaymentByID(id);
  }

  @Get("/paymenthistory")
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("customer")
  getPaymentHistory(@Request() req): any {
    const userId = req.session['passport']['user'].userId;
    return this.PaymentService.getPaymentByID(userId);
  }

  @Get("/makepayment")
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("cutomer")
  viewCartPayment(@Body() paymentDTO: PaymentDTO): any {
    //show cart price and ask for payment
  }

  @Post("/makepayment")
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("cutomer")
  makePayment(@Body() paymentDTO: PaymentDTO): any {
    return this.PaymentService.AddPayment(paymentDTO);
  }

  @Post("/")
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  @UsePipes(new ValidationPipe())
  addPayment(@Body() paymentDTO: PaymentDTO): any {
    return this.PaymentService.AddPayment(paymentDTO);
  }

  @Put(":id")
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  @UsePipes(new ValidationPipe())
  updatePayment(@Param("id") id: number, @Body() paymentDTO: PaymentDTO): any {
    return this.PaymentService.updatePayment(paymentDTO, id);
  }

  @Delete(":id")
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  deletePaymentById(@Param("id") id: number): any {
    return this.PaymentService.deletePaymentById(id);
  }

}
