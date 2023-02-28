import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ClientModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
