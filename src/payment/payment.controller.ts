import { Controller, Get, Body, Delete, Param, Post, Put, Query} from '@nestjs/common';
import { PaymentDTO } from './dto/paymentDTO.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private PaymentService: PaymentService){}

  @Get("/")
    getPayment(): any { 
        return this.PaymentService.getIndex();
    }

    // @Get("/find")
    // getpaymentByIDName(@Query() qry:any): any {
    //   return this.PaymentService.getPaymentByIDName(qry);
    // }  

    @Get("/:id")
    getPaymentByID(@Param("id") id:number): any {
      return this.PaymentService.getPaymentByID(id);
    }

    @Post("/add")
    addPayment(@Body() paymentDTO:PaymentDTO): any {
      return this.PaymentService.AddPayment(paymentDTO);
    }

    @Put("/:id")
    updatePayment(@Param("id") id: number, @Body() paymentDTO: PaymentDTO): any {
      return this.PaymentService.updatePayment(paymentDTO, id);
    }

    @Delete(":id")
    deletePaymentById(@Param("id") id:number): any {
      return this.PaymentService.deletePaymentById(id);
    }

    // @Get("user/:id")
    // getUserPayments(@Param("id") id:number): any {
    //   return this.PaymentService.getUserPayments(id);
    // }
}
