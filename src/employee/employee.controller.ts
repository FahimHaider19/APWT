import { Controller, Get, Body, Delete, Param, Post, Put, Query, ParseIntPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { Employee } from './employeeDTO.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private EmployeeService: EmployeeService) {}

  @Get('/')
  getEmployee(): any {
    return this.EmployeeService.getIndex();
  }

  @Get('/find')
  getemployeeByIDName(@Query() qry: any): any {
    return this.EmployeeService.getEmployeeByIDName(qry);
  }

  @Get('/:id')
  getEmployeeByID(@Param('id', ParseIntPipe) id: number): any {
    return this.EmployeeService.getEmployeeByID(id);
  }

  @Post('/add')
  @UsePipes(new ValidationPipe())
  addEmployee(@Body() employeeDTO: Employee): any {
    return this.EmployeeService.addEmployee(employeeDTO);
  }

  @Put('/update')
  updateEmployee(
    @Body('name') name: string,
    @Body('id', ParseIntPipe) id: number,
  ): any {
    return this.EmployeeService.updateEmployee(name, id);
  }

  @Put('/update/:id')
  updateEmployeeById(
    @Body('name') name: string,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.EmployeeService.updateEmployeeById(name, id);
  }

  @Delete('/delete/:id')
  deleteEmployeeById(@Param('id', ParseIntPipe) id: number): any {
    return this.EmployeeService.deleteEmployeeById(id);
  }

  @Get('verify/:id')
  getVerificationByID(@Param('id', ParseIntPipe) id: number): any {
    return this.EmployeeService.getVerificationByID(id);
  }
}
