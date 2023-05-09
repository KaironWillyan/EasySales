import { CreateEmpresaDto } from "src/modules/empresa/dto/create-empresa.dto";
import { CreateItemCompraDto } from "src/modules/item-compra/dto/create-item-compra.dto";
import { CreateItemVendaDto } from "src/modules/item-venda/dto/create-item-venda.dto";
import { CreateProdutoDto } from "src/modules/produto/dto/create-produto.dto";

export class CreateEstoqueDto {
id_estoque    ?:string;
item_venda    :CreateItemVendaDto[];
item_compra   :CreateItemCompraDto[];
empresas      :CreateEmpresaDto[]; 
produtos      :CreateProdutoDto[];  
valor_venda   :number;
}
