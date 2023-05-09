import { Fornecedor } from "src/modules/fornecedor/entities/fornecedor.entity";
import { CreateItemCompraDto } from "src/modules/item-compra/dto/create-item-compra.dto";

export class CreateCompraDto {
id_compra           ?:string;
data_compra         :Date;
valor_total_compra  :number;
itemCompra          :CreateItemCompraDto[];
fornecedorId        :string
}
