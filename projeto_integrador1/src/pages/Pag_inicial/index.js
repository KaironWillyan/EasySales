import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import "./pag_inicial.css";

const Minha_marca = () => {
  const [marca, setObjetos] = useState([]);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    setObjetos([
      { id: 1, nome: 'FORNECEDOR 1' },
      { id: 2, nome: 'FORNECEDOR 2' },
      { id: 3, nome: 'FORNECEDOR 3' },
      { id: 3, nome: 'FORNECEDOR 4' },
      { id: 3, nome: 'FORNECEDOR 5' },
    ]);
  }, []);

  const aumentarFonte = () => {
    setFontSize(fontSize + 2);
  };

  const diminuirFonte = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <div className="container"> 
      <div className="marcas">
        <div className="button-container">
          <button className="aumentarFonte" onClick={aumentarFonte}>
            Aumentar Fonte
          </button>
          <button className="diminuirFonte" onClick={diminuirFonte}>
            Diminuir Fonte
          </button>
        </div>
        <div>
          {marca.map(marca => (
            <Link to={`/marca/${marca.id}`}>
              <button className="bt_marca" style={{ fontSize: `${fontSize}px` }}>
                {marca.nome}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
};

function Pag_inicial() {
  return (
    <div className="pag_inicial">
      {Minha_marca()}
      <Link to="/cadastroMarca">
        <button className="addMarca">+</button>
      </Link>
    </div>
  )
}

export default Pag_inicial
