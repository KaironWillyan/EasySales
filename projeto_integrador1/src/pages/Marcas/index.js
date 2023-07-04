
import React, { useEffect, useState } from 'react';
import './estiloMarca.css';
import { Link } from 'react-router-dom';

const Produto = () => {
  const [produtos, setObjetos] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    setObjetos([
      { id: 1, nome: 'Prod1', qtt: 2 },
      { id: 2, nome: 'Prod2', qtt: 33 },
      { id: 3, nome: 'Prod3', qtt: 4 },
      { id: 4, nome: 'Prod4', qtt: 1 },
    
    ]);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="container">
      <div className="produtos">
        {produtos.map(produto => (
          <div
            className="ValorProduto"
            key={produto.id}
            onMouseEnter={() => handleMouseEnter(produto.id)}
            onMouseLeave={handleMouseLeave}
          >
            <p>{produto.nome}</p>
            {hoveredId === produto.id && (
              <div>
                <p>Quantidade: {produto.qtt}</p>
                <p>ID: {produto.id}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link  to="/cadastroProduto">
                <button className="addProd">+</button>
            </Link>
    

    </div>
  );
};

export default Produto;
