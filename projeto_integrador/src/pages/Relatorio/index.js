import { Link } from "react-router-dom"
import "./relatorio.css"

const TiposRelatorio =()=> {
        return(
    <div className="containerR">
        <div className="pRelatorio">
        <p className="PRelatorio">Selecione o qual relatorio voce gostaria de vizualizar:</p>

        </div>
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
        <Link className= "Bt_relatorio" to ={`/StatusPrduto `}>
            <button>
                 Status do prduto 
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




