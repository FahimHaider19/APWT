import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CustomerDTO } from "./dto/customer.dto";
import { Customer } from "./entity/Customer.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class customerService {
    constructor(
        @InjectRepository(Customer)
        private customerRepo: Repository<Customer>,
        private mailerService: MailerService
        
        ) {}

getIndex():any { 
    return this.customerRepo.find();

}
getUserByID( id):any {
    return this.customerRepo.findOneBy(id);
}

getUserByIDName(name):any {
    return this.customerRepo.findOneBy(name);
}

insertUser(mydto:CustomerDTO):any {
    const customeraccount = new Customer()
   return this.customerRepo.save(customeraccount);
}
updateUserbyid(mydto:CustomerDTO,id):any {
    return this.customerRepo.update(id,mydto);
       }






       async signup(mydto) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password= hassedpassed;
        return this.customerRepo.save(mydto);
        }
        
        async signin(mydto){
            console.log(mydto.password);
        const mydata= await this.customerRepo.findOneBy({email: mydto.email});
        const isMatch= await bcrypt.compare(mydto.password, mydata.password);
        if(isMatch) {
        return 1;
        }
        else {
            return 0;
        }
        
        }



       

async sendEmail(mydata){
 return   await this.mailerService.sendMail({
  to: mydata.email,
  subject: mydata.subject,
  text: mydata.text, 
 });      
}

}