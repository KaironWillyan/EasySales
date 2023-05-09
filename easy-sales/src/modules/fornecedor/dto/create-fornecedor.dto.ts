import { CreateCompraDto } from "src/modules/compra/dto/create-compra.dto";

export interface CreateFornecedorDto {
  id_fornecedor             ?:string;
  nome_fornecedor           :string;
  rua_fornecedor            :string;
  bairro_fornecedor         :string;
  num_fornecedor            :string;
  logradouro_fornecedor     :string;
  cep_fornecedor            :string;
  cidade_fornecedor         :string;
  compras                   :CreateCompraDto[];
}
