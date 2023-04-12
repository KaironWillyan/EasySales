import { randomUUID } from "crypto";

export interface ClientDto {
    id_cli: String;
    nome_cli       :String;
    cpf            :String;
    rua_cli        :String
    bairro_cli     :String
    num_cli        :String
    logradouro_cli :String
    cep_cli        :String
    cidade_cli     :String
    compras        :VendaDto[]
}
