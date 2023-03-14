import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './entities/employee.entity';
import { EmployeeDTO } from './dto/employeeDTO.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private EmployeeRepo: Repository<EmployeeEntity>,
  ) {}

  getIndex(): any {
    return this.EmployeeRepo.find();
  }

  getEmployeeByID(userId): any {
    return this.EmployeeRepo.findOne(userId);
    // const data = this.EmployeeRepo.findOne(userId);
    // if(data){
    //   return data;
    // }
    // else{
    //   return {message: "No data found"};
    // }
  }

  // getVerificationByID(id): any {
  //   return this.EmployeeRepo.findOne({
  //     select: ['verificationStatus'],
  //     where: { userId: id },
  //   });
  // }

  // getEmployeeByIDName(qry): any {
  //   if (qry.id) {
  //     return this.EmployeeRepo.find(qry.id);
  //   } else if (qry.name) {
  //     return this.EmployeeRepo.findOne({ where: { name: qry.name } });
  //   }
  // }

  getEmployeeByEmail(email, password): any {
    return this.EmployeeRepo.findOne({
      where: { email: email, password: password },
    });
  }

  addEmployee(employeeDTO: EmployeeDTO): any {
    const employee = new EmployeeEntity();
    employee.name = employeeDTO.name;
    employee.email = employeeDTO.email;
    employee.phone = employeeDTO.phone;
    employee.password = employeeDTO.password;
    // employee.verificationStatus = false;
    return this.EmployeeRepo.save(employee);
  }

  updateEmployee(employeeDTO, id): any {
    return this.EmployeeRepo.update(id, employeeDTO);
  }

  updateEmployeeById(employeeDTO, id): any {
    return this.EmployeeRepo.update(id, employeeDTO);
  }

  deleteEmployeeById(id): any {
    return this.EmployeeRepo.delete(id);
  }
}
