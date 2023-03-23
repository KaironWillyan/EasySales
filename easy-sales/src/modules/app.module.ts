import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { SalesModule } from './sales/sales.module';
import { StoreModule } from './store/store.module';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [ClientModule, ProductModule, SalesModule, StoreModule, SellerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
