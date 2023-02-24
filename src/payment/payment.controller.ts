import { Controller, Get, Body, Delete, Param, Post, Put, Query} from '@nestjs/common';
import { PaymentDTO } from './paymentDTO.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private PaymentService: PaymentService){}

  @Get("/")
    getPayment(): any { 
        return this.PaymentService.getIndex();
    }

    @Get("/find")
    getpaymentByIDName(@Query() qry:any): any {
      return this.PaymentService.getPaymentByIDName(qry);
    }  

    @Get("/:id")
    getPaymentByID(@Param("id") id:number): any {
      return this.PaymentService.getPaymentByID(id);
    }

    @Post("/add")
    addPayment(@Body() paymentDTO:PaymentDTO): any {
      return this.PaymentService.AddPayment(paymentDTO);
    }

    @Put("/update")
    updatePayment( 
      @Body("name") name:string, 
      @Body("id") id:number
      ): any {
    return this.PaymentService.updatePayment(name, id);
    }

    @Put("/update/:id")
    updatePaymentById( 
      @Body("name") name:string, 
      @Param("id") id:number
      ): any {
    return this.PaymentService.updatePaymentById(name,id);
    }

    @Delete("/delete/:id")
    deletePaymentById( 
     @Param("id") id:number
      ): any {
    return this.PaymentService.deletePaymentById(id);
    }

    @Get("/refund/:id")
    Refund( 
     @Param("id") id:number
      ): any {
    return this.PaymentService.RefundPayment(id);
    }

    @Get("verify/:id")
    getVerificationByID(@Param("id") id:number): any {
      return this.PaymentService.getVerificationByID(id);
    }

    @Get("user/:name")
    ItemListing(@Query() qry:any): any {
      return this.PaymentService.ItemListing(qry);
    }

    @Get("transfer")
    TradePaymentTransfer(@Query() qry:any): any {
      return this.PaymentService.TradePaymentTransfer(qry);
    }

    @Get("user/:name")
    getUserPayments(@Param("name") name:string): any {
      return this.PaymentService.getUserPayments(name);
    }


}
