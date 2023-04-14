import { PartialType } from '@nestjs/mapped-types';
import { CreateItemVendaDto } from './create-item-venda.dto';

export class UpdateItemVendaDto extends PartialType(CreateItemVendaDto) {}
