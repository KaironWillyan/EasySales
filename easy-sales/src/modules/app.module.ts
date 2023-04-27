import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produto/produto.module';
import { ItemCompraModule } from './item-compra/item-compra.module';
import { CompraModule } from './compra/compra.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { ItemVendaModule } from './item-venda/item-venda.module';
import { VendaModule } from './venda/venda.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Module({
  imports: [ClienteModule, ProdutoModule, ItemCompraModule, CompraModule, FornecedorModule, ItemVendaModule, VendaModule, VendedorModule],
  controllers: [PrismaService],
  providers: [],
})
export class AppModule {}
