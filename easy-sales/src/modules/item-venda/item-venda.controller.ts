import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemVendaService } from './item-venda.service';
import { CreateItemVendaDto } from './dto/create-item-venda.dto';
import { UpdateItemVendaDto } from './dto/update-item-venda.dto';

@Controller('item-venda')
export class ItemVendaController {
  constructor(private readonly itemVendaService: ItemVendaService) {}

  @Post()
  create(@Body() createItemVendaDto: CreateItemVendaDto) {
    return this.itemVendaService.create(createItemVendaDto);
  }

  @Get()
  findAll() {
    return this.itemVendaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemVendaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemVendaDto: UpdateItemVendaDto) {
    return this.itemVendaService.update(+id, updateItemVendaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemVendaService.remove(+id);
  }
}
