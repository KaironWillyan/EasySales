import { Injectable } from '@nestjs/common';
import { CreateItemVendaDto } from './dto/create-item-venda.dto';
import { UpdateItemVendaDto } from './dto/update-item-venda.dto';

@Injectable()
export class ItemVendaService {
  create(createItemVendaDto: CreateItemVendaDto) {
    return 'This action adds a new itemVenda';
  }

  findAll() {
    return `This action returns all itemVenda`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemVenda`;
  }

  update(id: number, updateItemVendaDto: UpdateItemVendaDto) {
    return `This action updates a #${id} itemVenda`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemVenda`;
  }
}
