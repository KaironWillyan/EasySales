
import React, { useEffect, useState } from 'react';
import './estiloMarca.css';
import { Link } from 'react-router-dom';
import { client } from '../../service/http-common';

const Produto = () => {
  const [produtos, setProdutos] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [loading, setLoading] = useState(true)  


 async function getProduto() {
try{
  const res = await client.get("http://localhost:8080/produto")
  setProdutos(res.data)
}
 catch(err){
  console.log("Error");
}finally{
  setLoading(false)
}
}
const handleMouseEnter = (id) => {
  setHoveredId(id);
};

const handleMouseLeave = () => {
  setHoveredId(null);
};
useEffect (()=>{
  getProduto()
}, [])

  return (
    <div className="container">
      <div className="produtos">
        {produtos.map(produto => (
          <div
            className="ValorProduto"
            key={produto.IdFn}
            onMouseEnter={() => handleMouseEnter(produto.idProd)}
            onMouseLeave={handleMouseLeave}
          >
            <p>{produto.nomeProduto}</p>
            {hoveredId === produto.idProd && (
              <div>
                <p>ID: {produto.idProd}</p>
                <p>NOME: {produto.nomeProd}</p>
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
