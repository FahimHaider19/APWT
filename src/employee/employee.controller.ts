import { Controller, Get, Body, Delete, Param, Post, Put, Query, Request, ParseIntPipe, UsePipes, ValidationPipe, Session, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.gaurd';
import { Roles } from 'src/auth/roles.decorator';
import { SessionGaurd } from 'src/auth/session.gaurd';
import { EmployeeDTO } from './dto/employeeDTO.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private EmployeeService: EmployeeService) {}

  @Get('/')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  getEmployee(): any {
    return this.EmployeeService.getIndex();
  }

  @Get(':id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  getEmployeeByID(@Param('id', ParseIntPipe) id: number): any {
    return this.EmployeeService.getEmployeeByID(id);
  }

  @Post('/')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  @UsePipes(new ValidationPipe())
  addEmployee(@Body() employeeDTO: EmployeeDTO): any {
    return this.EmployeeService.addEmployee(employeeDTO);
  }

  @Put('/')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  @UsePipes(new ValidationPipe())
  updateEmployee(@Request() req, @Body() employeeDTO: EmployeeDTO): any {
    const userId = req.session['passport']['user'].userId;
    console.log(userId);
    return this.EmployeeService.updateEmployee(employeeDTO, userId);
  }

  @Put('/:id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  updateEmployeeById(
    @Body() employeeDTO: EmployeeDTO,
    @Param('id', ParseIntPipe) id: number): any {
    return this.EmployeeService.updateEmployeeById(employeeDTO, id);
  }

  @Delete('/:id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  deleteEmployeeById(@Param('id', ParseIntPipe) id: number): any {
    return this.EmployeeService.deleteEmployeeById(id);
  }
}
