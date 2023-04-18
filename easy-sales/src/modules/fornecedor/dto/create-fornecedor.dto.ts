import { CreateProdutoDto } from "src/modules/produto/dto/create-produto.dto"

export interface CreateFornecedorDto {
  id_fornecedor
  produtos                  :CreateProdutoDto[]
  nome_fornecedor           :string
  rua_fornecedor            :string
  bairro_fornecedor         :string
  num_fornecedor            :string
  logradouro_fornecedor     :string
  cep_fornecedor            :string
  cidade_fornecedor         :string
}
