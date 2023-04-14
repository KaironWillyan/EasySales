import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemCompraService } from './item-compra.service';
import { CreateItemCompraDto } from './dto/create-item-compra.dto';
import { UpdateItemCompraDto } from './dto/update-item-compra.dto';

@Controller('item-compra')
export class ItemCompraController {
  constructor(private readonly itemCompraService: ItemCompraService) {}

  @Post()
  create(@Body() createItemCompraDto: CreateItemCompraDto) {
    return this.itemCompraService.create(createItemCompraDto);
  }

  @Get()
  findAll() {
    return this.itemCompraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemCompraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemCompraDto: UpdateItemCompraDto) {
    return this.itemCompraService.update(+id, updateItemCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemCompraService.remove(+id);
  }
}
