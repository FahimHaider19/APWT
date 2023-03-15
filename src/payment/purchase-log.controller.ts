import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PurchaseLogService } from './purchase-log.service';
import { PurchaseLogDto } from './dto/purchase-log.dto';
import { Roles } from 'src/auth/roles.decorator';
import { SessionGaurd } from 'src/auth/session.gaurd';
import { JwtAuthGuard } from 'src/auth/jwt.gaurd';

@Controller('purchase-log')
export class PurchaseLogController {
  constructor(private readonly purchaseLogService: PurchaseLogService) {}

  @Post()
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee", "customer")
  @UsePipes(new ValidationPipe())
  create(@Body() purchaseLogDto: PurchaseLogDto) {
    return this.purchaseLogService.create(purchaseLogDto);
  }

  @Get()
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  findAll() {
    return this.purchaseLogService.findAll();
  }

  @Get(':id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee", "customer")
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseLogService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  update(@Param('id', ParseIntPipe) id: number, @Body() purchaseLogDto: PurchaseLogDto) {
    return this.purchaseLogService.update(+id, purchaseLogDto);
  }

  @Delete('/:id')
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseLogService.remove(+id);
  }
}
