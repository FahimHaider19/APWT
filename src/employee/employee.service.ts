import { Injectable } from '@nestjs/common';
import { Employee } from './employeeDTO.dto';

@Injectable()
export class EmployeeService {
  getIndex(): string {
    return 'employee Index';
  }

  getEmployeeByID(id): any {
    return 'employee ID: ' + id;
  }

  getVerificationByID(id): any {
    return 'employee ' + id + 'Verified';
  }

  getEmployeeByIDName(qry): any {
    return 'employee ID: ' + qry.id + ', UserName: ' + qry.name;
  }

  addEmployee(employeeDTO: Employee): any {
    return (
      'employee UserName: ' + employeeDTO.name + ' , employee ID: ' + employeeDTO.userId
    );
  }

  updateEmployee(name, id): any {
    return 'employee updated name: ' + name + ' and id is ' + id;
  }

  updateEmployeeById(name, id): any {
    return 'Update employee where id ' + id + ' and change name to ' + name;
  }

  deleteEmployeeById(id): any {
    return 'employee ID:' + id + ' Deleted.';
  }
}
