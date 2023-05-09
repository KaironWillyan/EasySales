import { CreateEstoqueDto } from "src/modules/estoque/dto/create-estoque.dto";

export class CreateProdutoDto {
id_prod   ?:string;
nome_prod :string;
estoque   :CreateEstoqueDto[]
}