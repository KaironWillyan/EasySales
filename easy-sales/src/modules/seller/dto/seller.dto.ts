export interface SellerDto {
    id_vendedor           :String  
    nome_vendedor         :String
  
    email                 :String
    senha                 :String
  
    vendas                :VendaDto[]
}
