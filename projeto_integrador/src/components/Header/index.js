import { Link } from 'react-router-dom';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import es from "./es.ico"
  import './header.css'

export function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className='hlogo'>
			<img src={es}></img>
			</div>
			{/* <h3>EASY SALE</h3> */}
			<nav ref={navRef}>
            <Link className = 'link' to = "/PagInicial">Pagina inical</Link>
            <Link className = 'link' to = "fornecedores">Fornecedores</Link>
            <Link className = 'link' to = "/clientes">Clientes</Link>
{/*             <Link className = 'link' to = "/vendas">Vendas</Link>
 */}            <Link className = 'link' to = "/relatorio">Relatorio</Link>
            <Link className = 'link' to = "/Configuracao">Configuração</Link> {/* Pensar em como fazer */}
            <Link className 	= 'link' to = "/">Sair</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

