import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { cartDTO } from "./dto/customer-cart.dto";
import { Cart } from "./entity/customer-cart.entity";

@Injectable()
export class cartService {
    constructor(
        @InjectRepository(Cart)
        private cartRepo: Repository<Cart>,
        
        ) {}

getIndex():any { 
    return this.cartRepo.find();

}
getUserByID( id):any {
    return this.cartRepo.findOneBy(id);
}

getUserByIDName(name):any {
    return this.cartRepo.findOneBy(name);
}

insertUser(mydto:cartDTO):any {
    const cartaccount = new Cart()
   return this.cartRepo.save(cartaccount);
}
updateUserbyid(mydto:cartDTO,id):any {
    return this.cartRepo.update(id,mydto);
       }
}