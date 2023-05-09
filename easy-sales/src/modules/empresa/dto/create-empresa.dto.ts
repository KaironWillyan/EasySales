import { CreateEstoqueDto } from "src/modules/estoque/dto/create-estoque.dto";

export class CreateEmpresaDto {
id_empresa      ?:string;
nome_empresa    :string;
email           :string;
senha           :string;
estoque         :CreateEstoqueDto[]
}
