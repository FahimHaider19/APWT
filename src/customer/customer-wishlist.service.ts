import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { wishlistDTO } from "./dto/customer-wishlist.dto";
import { Wishlist } from "./entity/customer-wishlist.entity";

@Injectable()
export class wishlistService {
    constructor(
        @InjectRepository(Wishlist)
        private wishlistRepo: Repository<Wishlist>,
        
        ) {}

getIndex():any { 
    return this.wishlistRepo.find();

}
getUserByID( id):any {
    return this.wishlistRepo.findOneBy(id);
}

getUserByIDName(name):any {
    return this.wishlistRepo.findOneBy(name);
}

insertUser(mydto:wishlistDTO):any {
    const wishlistaccount = new Wishlist()
   return this.wishlistRepo.save(wishlistaccount);
}
updateUserbyid(mydto:wishlistDTO,id):any {
    return this.wishlistRepo.update(id,mydto);
       }
}