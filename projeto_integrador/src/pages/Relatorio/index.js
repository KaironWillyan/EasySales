import { Link } from "react-router-dom"
import "./relatorio.css"

const TiposRelatorio =()=> {
        return(
    <div className="container1">
        <p className="PRelatorio">Selecione o qual relatorio voce gostaria de vizualizar:</p>
        <Link className= "Bt_relatorio"to ={`/VendasPendentes`}>
            <button>
                Relatorio vendas pendentes
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/VendasQuitadas`}>
            <button>
                Relatorio vendas quitadas
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/VendasEfetuadas`}>
            <button>
                Relatorio vendas efetuadas
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/ComprasEfetuadas`}>
            <button>
                Relatorio vendas pendentes
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/StatusPrduto `}>
            <button>
                 Status do prduto 
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/MairoesVendas`}>
            <button>
                Produtos de maiores vendas
            </button>
        </Link>
        
    </div>
        )
}



function Relatorio(){
    return(
        <div>
        {TiposRelatorio()}
        </div>
    )
}
export default Relatorio

/* vendas pendentes 
vendas quitadas 
e vendas efetuadas


compras efetuadas 


status do prduto 
produtos que geraam maior venda
alerar de produto sem estoque 
*/