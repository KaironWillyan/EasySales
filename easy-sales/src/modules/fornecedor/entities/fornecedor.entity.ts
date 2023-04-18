import { Produto } from "src/modules/produto/entities/produto.entity"

export class Fornecedor {
    id_fornecedor             :string
    produtos                  :Produto[]
    nome_fornecedor           :string
    rua_fornecedor            :string
    bairro_fornecedor         :string
    num_fornecedor            :string
    logradouro_fornecedor     :string
    cep_fornecedor            :string
    cidade_fornecedor         :string
}
