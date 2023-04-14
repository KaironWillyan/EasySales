import { Test, TestingModule } from '@nestjs/testing';
import { ItemCompraController } from './item-compra.controller';
import { ItemCompraService } from './item-compra.service';

describe('ItemCompraController', () => {
  let controller: ItemCompraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemCompraController],
      providers: [ItemCompraService],
    }).compile();

    controller = module.get<ItemCompraController>(ItemCompraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
