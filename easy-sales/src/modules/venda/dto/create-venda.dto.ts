import { CreateItemVendaDto } from "src/modules/item-venda/dto/create-item-venda.dto";

export class CreateVendaDto {
id_venda            ?:string;    
cli_venda_id        :string;
itemVenda           :CreateItemVendaDto[];
valor_total_venda   :number;
dt_pagamento        :Date;
quantidade_parcelas :number;
}
