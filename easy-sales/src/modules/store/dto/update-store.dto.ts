import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './store.dto';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {}
