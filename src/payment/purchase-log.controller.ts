import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PurchaseLogService } from './purchase-log.service';
import { PurchaseLogDto } from './dto/purchase-log.dto';

@Controller('purchase-log')
export class PurchaseLogController {
  constructor(private readonly purchaseLogService: PurchaseLogService) {}

  @Post()
  create(@Body() purchaseLogDto: PurchaseLogDto) {
    return this.purchaseLogService.create(purchaseLogDto);
  }

  @Get()
  findAll() {
    return this.purchaseLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() purchaseLogDto: PurchaseLogDto) {
    return this.purchaseLogService.update(+id, purchaseLogDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseLogService.remove(+id);
  }
}
