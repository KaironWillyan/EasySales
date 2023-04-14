import { Injectable } from '@nestjs/common';
import { CreateItemCompraDto } from './dto/create-item-compra.dto';
import { UpdateItemCompraDto } from './dto/update-item-compra.dto';

@Injectable()
export class ItemCompraService {
  create(createItemCompraDto: CreateItemCompraDto) {
    return 'This action adds a new itemCompra';
  }

  findAll() {
    return `This action returns all itemCompra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemCompra`;
  }

  update(id: number, updateItemCompraDto: UpdateItemCompraDto) {
    return `This action updates a #${id} itemCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemCompra`;
  }
}
