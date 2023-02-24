import { Controller, Get, Body, Delete, Param, Post, Put, Query, ParseIntPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { EmployeeDTO } from './employeeDTO.dto';
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
  addEmployee(@Body() employeeDTO: EmployeeDTO): any {
    return this.EmployeeService.addEmployee(employeeDTO);
  }

  @Put('/update')
  updateEmployee(
    @Body() employeeDTO: EmployeeDTO,
    // @Body('id', ParseIntPipe) id: number,
  ): any {
    return this.EmployeeService.updateEmployee( employeeDTO,employeeDTO.userId);
  }

  @Put('/update/:id')
  updateEmployeeById(
    @Body() employeeDTO: EmployeeDTO,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.EmployeeService.updateEmployeeById(employeeDTO, id);
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
