 import { Link } from "react-router-dom"
import "./relatorio.css"

const TiposRelatorio =()=> {
        return(
    <div className="containerR">
        <div className="pRelatorio">
        <p className="PRelatorio">Selecione o qual relatorio voce gostaria de vizualizar:</p>

        </div >
        <div className="Relatorios">
        <Link className= "Bt_relatorio"to ={`/VendasPendentes`}>
            <button>
            VendasPendentes
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/VendasQuitadas`}>
            <button>
            VendasQuitadas
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/VendasEfetuadas`}>
            <button>
                Relatorio vendas efetuadas
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/StatusProduto `}>
            <button>
                 Status do prduto 
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/LucroGeral`}>
            <button>
                 Lucro geral 
            </button>
        </Link>
        </div>
        
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




 

