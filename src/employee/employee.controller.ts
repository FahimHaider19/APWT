import { Controller, Get, Body, Delete, Param, Post, Put, Query, Request, ParseIntPipe, UsePipes, ValidationPipe, Session} from '@nestjs/common';
import { EmployeeDTO } from './dto/employeeDTO.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private EmployeeService: EmployeeService) {}

  @Get('/')
  getEmployee(): any {
    return this.EmployeeService.getIndex();
  }

  @Get(':id')
  getEmployeeByID(@Param('id', ParseIntPipe) id: number): any {
    return this.EmployeeService.getEmployeeByID(id);
  }

  @Post('')
  @UsePipes(new ValidationPipe())
  addEmployee(@Body() employeeDTO: EmployeeDTO): any {
    return this.EmployeeService.addEmployee(employeeDTO);
  }

  @Put('/updateprofile')
  @UsePipes(new ValidationPipe())
  updateEmployee(@Request() req, @Body() employeeDTO: EmployeeDTO): any {
    const userId = req.session['passport']['user'].userId;
    console.log(userId);
    return this.EmployeeService.updateEmployee(employeeDTO, userId);
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

  // @Get('verify/:id')
  // getVerificationByID(@Param('id', ParseIntPipe) id: number): any {
  //   return this.EmployeeService.getVerificationByID(id);
  // }
}
