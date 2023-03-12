import { Controller, Get, Body, Delete, Param, Post, Put, Query, ParseIntPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { CustomerDTO } from './dto/customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private CustomerService: CustomerService) {}

}
