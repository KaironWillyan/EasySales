import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./relatorio.css";

const TiposRelatorio = () => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className="containerR" style={{ fontSize: `${fontSize}px` }}>
      <div className="button-container">
        <button onClick={increaseFontSize}>Aumentar Fonte</button>
        <button onClick={decreaseFontSize}>Diminuir Fonte</button>
      </div>
      <div className="pRelatorio">
        <p className="PRelatorio">Selecione o qual relatorio você gostaria de visualizar:</p>
      </div>
      <div className="Relatorios">
        <Link className="Bt_relatorio" to={`/VendasPendentes`}>
          <button>
            Vendas Pendentes
          </button>
        </Link>

        <Link className="Bt_relatorio" to={`/VendasEfetuadas`}>
          <button>
            Relatório de vendas efetuadas
          </button>
        </Link>

        <Link className="Bt_relatorio" to={`/StatusProduto`}>
          <button>
            Status do produto
          </button>
        </Link>

        <Link className="Bt_relatorio" to={`/LucroGeral`}>
          <button>
            Lucro geral
          </button>
        </Link>
      </div>
    </div>
  );
};

function Relatorio() {
  return (
    <div>
      <TiposRelatorio />
    </div>
  );
}

export default Relatorio;
