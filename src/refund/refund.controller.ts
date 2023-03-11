import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RefundService } from './refund.service';
import { RefundDto } from './dto/refund.dto';

@Controller('refund')
export class RefundController {
  constructor(private readonly refundService: RefundService) {}

  @Post()
  create(@Body() RefundDto: RefundDto) {
    return this.refundService.create(RefundDto);
  }

  @Get()
  findAll() {
    return this.refundService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refundService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() RefundDto: RefundDto) {
    return this.refundService.update(+id, RefundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refundService.remove(+id);
  }
}
