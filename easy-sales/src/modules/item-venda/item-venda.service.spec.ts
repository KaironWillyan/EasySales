import { Test, TestingModule } from '@nestjs/testing';
import { ItemVendaService } from './item-venda.service';

describe('ItemVendaService', () => {
  let service: ItemVendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemVendaService],
    }).compile();

    service = module.get<ItemVendaService>(ItemVendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
