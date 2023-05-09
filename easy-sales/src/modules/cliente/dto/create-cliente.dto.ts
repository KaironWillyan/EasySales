import { CreateVendaDto } from "src/modules/venda/dto/create-venda.dto";

export class CreateClienteDto {
id_cli        ?:string;
nome_cli      :string;
telefone_cli  :string;
cpf           :string;
rua_cli       :string;
bairro_cli    :string;
num_casa      :string;
logradouro_cli:string;
cep_cli       :number;
cidade_cli    :string;
compras       :CreateVendaDto[]
}
