import { Injectable } from "@nestjs/common";
import { Payment } from "./paymentDTO.dto";

@Injectable()
export class PaymentService{
  getIndex() : string {
    return "Payment Index";
  }

  getPaymentByID(id):any {
    return "Payment ID: "+id;
  }

  getVerificationByID(id):any {
    return "Payment "+ id +"Verified";
  }

  getPaymentByIDName(qry):any {
    return "Payment ID: "+qry.id +", UserName: "+qry.name;
  }

  AddPayment(paymentDTO:Payment):any {
    return "Payment UserName: " + paymentDTO.name+" , Payment ID: " + paymentDTO.id;
  }

  updatePayment(name,id):any {
    return "Payment updated name: " +name+" and id is " +id;
  }

  updatePaymentById(name,id):any {
    return "Update Payment where id " +id+" and change name to " +name;
  }

  deletePaymentById(id):any {
    return "Payment ID:"+id+" Deleted.";
  }

  RefundPayment(id):any {
    return "Payment ID:"+id+" Refunded.";
  }
  
  TradePaymentTransfer(qry):any {
    return "Trade=> From:"+qry.from+", To:"+qry.to+", Amount:"+qry.amount;
  }

  ItemListing(qry):any {
    return "Item Name:"+qry.item+", Price:"+qry.price;
  }

  getUserPayments(name):any {
    return "Payment list of user:"+name;
  }

  
}
