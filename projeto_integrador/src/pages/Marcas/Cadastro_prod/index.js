import React, { useState } from 'react';
import './cadastroP.css';

const CadastroProduto = () => {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [quantidadeAdquirida, setQuantidadeAdquirida] = useState('');
  const [id, setId] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nomeProduto') {
      setNomeProduto(value);
    } else if (name === 'quantidadeAdquirida') {
      setQuantidadeAdquirida(value);
    } else if (name === 'id') {
      setId(value);
    }
  };

  const handleCadastroProduto = () => {
    if (nomeProduto.trim() === '' || quantidadeAdquirida.trim() === '' || id.trim() === '') {
      return;
    }

    const novoProduto = {
      nomeProduto,
      quantidadeAdquirida,
      id,
    };

    setProdutos([...produtos, novoProduto]);
    setNomeProduto('');
    setQuantidadeAdquirida('');
    setId('');
  };

  return (
    <div className="container">
      <div className="cadastro">
        <h2>Cadastro de Produtos</h2>
        <div className="form-group">
          {/* <label>Nome do Produto:</label> */}
          <input
            type="text"
            name="nomeProduto"
            value={nomeProduto}
            onChange={handleInputChange}
            placeholder="Digite o nome do produto"
          />
        </div>
        <div className="form-group">
         {/*  <label>Quantidade Adquirida:</label> */}
          <input
            type="text"
            name="quantidadeAdquirida"
            value={quantidadeAdquirida}
            onChange={handleInputChange}
            placeholder="Digite a quantidade adquirida"
          />
        </div>
        <div className="form-group">
         {/*  <label>ID:</label> */}
          <input
            type="text"
            name="id"
            value={id}
            onChange={handleInputChange}
            placeholder="Digite o ID"
          />
        </div>
        <div className="button-container">
          <button onClick={handleCadastroProduto}>Cadastrar</button>
        </div>
      </div>
      </div>
  );
};

export default CadastroProduto;
