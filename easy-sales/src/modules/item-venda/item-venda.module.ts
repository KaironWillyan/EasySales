import { Module } from '@nestjs/common';
import { ItemVendaService } from './item-venda.service';
import { ItemVendaController } from './item-venda.controller';

@Module({
  controllers: [ItemVendaController],
  providers: [ItemVendaService]
})
export class ItemVendaModule {}
