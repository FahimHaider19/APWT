import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LibraryDTO } from "./dto/customer-library.dto";
import { Library } from "./entity/customer-library.entity";

@Injectable()
export class libraryService {
    constructor(
        @InjectRepository(Library)
        private libraryRepo: Repository<Library>,
        
        ) {}

getIndex():any { 
    return this.libraryRepo.find();

}
getUserByID( id):any {
    return this.libraryRepo.findOneBy(id);
}

getUserByIDName(name):any {
    return this.libraryRepo.findOneBy(name);
}

insertUser(mydto:LibraryDTO):any {
    const libraryaccount = new Library()
   return this.libraryRepo.save(libraryaccount);
}
updateUserbyid(mydto:LibraryDTO,id):any {
    return this.libraryRepo.update(id,mydto);
       }
}