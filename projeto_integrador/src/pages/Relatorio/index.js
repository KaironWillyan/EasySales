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
<<<<<<< HEAD
                Relatorio vendas pendentes {/* usar "vendasquitadas " */}
=======
                Relatorio vendas pendentes
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/VendasQuitadas`}>
            <button>
<<<<<<< HEAD
                Relatorio vendas quitadas{/* realmente precisa? */}
=======
                Relatorio vendas quitadas
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
            </button>
        </Link>
        <Link className= "Bt_relatorio" to ={`/VendasEfetuadas`}>
            <button>
                Relatorio vendas efetuadas
            </button>
        </Link>
<<<<<<< HEAD
        <Link className= "Bt_relatorio" to ={`/StatusProduto `}>
=======
        <Link className= "Bt_relatorio" to ={`/StatusPrduto `}>
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
            <button>
                 Status do prduto 
            </button>
        </Link>
<<<<<<< HEAD
        <Link className= "Bt_relatorio" to ={`/LucroGeral`}>
            <button>
                 Lucro geral 
            </button>
        </Link>
=======
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
       
        
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




