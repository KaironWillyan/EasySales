import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { Fornecedor } from './entities/fornecedor.entity';

@Injectable()
export class FornecedorService {

  constructor(private prisma: PrismaService){};

  async create(data: CreateFornecedorDto):Promise<Fornecedor> {
    const fornecedorExist = await this.prisma.fornecedor.findFirst({
      where: {
        id: data.id_fornecedor
      }
    })

    if(fornecedorExist){
      throw new BadRequestException('Fornecedor já foi cadastrado.')
    }

    const fornecedor = await this.prisma.fornecedor.create({
      data: {
        ...data
      }
    })

    return fornecedor;
  }

  findAll() {
    return `This action returns all fornecedor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fornecedor`;
  }

  update(id: number, updateFornecedorDto: UpdateFornecedorDto) {
    return `This action updates a #${id} fornecedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} fornecedor`;
  }
}
