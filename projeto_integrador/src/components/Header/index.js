 import './header.css'
import { Link } from 'react-router-dom';


function Header(){
    return(
        <header>
           
            <Link className = 'link' to = "/PagInicial">Pagina inical</Link>
            <Link className = 'link' to = "/fornecedores">Fornecedores</Link>
            <Link className = 'link' to = "/clientes">Clientes</Link>
            <Link className = 'link' to = "/vendas">Vendas</Link>
            <Link className = 'link' to = "/relatorio">Relatorio</Link>
            <Link className = 'link' to = "/">Sair</Link>
           
        </header>
    )
}
export  default Header; 
 