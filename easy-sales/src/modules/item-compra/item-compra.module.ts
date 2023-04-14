import { Module } from '@nestjs/common';
import { ItemCompraService } from './item-compra.service';
import { ItemCompraController } from './item-compra.controller';

@Module({
  controllers: [ItemCompraController],
  providers: [ItemCompraService]
})
export class ItemCompraModule {}
