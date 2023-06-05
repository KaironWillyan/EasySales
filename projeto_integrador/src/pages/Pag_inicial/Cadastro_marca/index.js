import React, { useState } from 'react';
import './cadastro.css'
import {Link} from 'react-router-dom'

const CadastroMarcas = () => {
  const [marcas, setMarcas] = useState([]);
  const [nomeMarca, setNomeMarca] = useState('');
  const [fornecedorMarca, setFornecedorMarca] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nomeMarca') {
      setNomeMarca(value);
    } else if (name === 'fornecedorMarca') {
      setFornecedorMarca(value);
    }
  };

  const handleCadastroMarca = () => {
    if (nomeMarca.trim() === '' || fornecedorMarca.trim() === '') {
      return;
    }

    const novaMarca = {
      id: Date.now(),
      nome: nomeMarca,
      fornecedor: fornecedorMarca,
    };

    setMarcas([...marcas, novaMarca]);
    setNomeMarca('');
    setFornecedorMarca('');
  };

  return (
    <div className='container'> 
    <div className='cadastro'>
      <h2>Cadastro de Marcas</h2>
      <div className='form-group'>
        <label>Nome da Marca:</label>
        <input
          type="text"
          name="nomeMarca"
          value={nomeMarca}
          onChange={handleInputChange}
          placeholder='Nome da marca'
          className='input-largura'
        />
      </div>
      <div className='form-group'>
        <label>Fornecedor:</label>
        <input
          type="text"
          name="fornecedorMarca"
          value={fornecedorMarca}
          onChange={handleInputChange}
          placeholder='Nome do fornecedor'
          className='input-largura'
        />
      </div>
      <div className='button-container'>
        {/* Lembrar de fazer a animação "cadastro realizado com sucesso" */}
        <Link to ={`/`}>
      <button onClick={handleCadastroMarca}>Cadastrar</button>
      </Link>
      </div>
      <div>
        <h3>Marcas Cadastradas:</h3>
        {marcas.length === 0 ? (
          <p>Nenhuma marca cadastrada.</p>
        ) : (
          <ul>
            {marcas.map((marca) => (
              <li key={marca.id}>
                Nome: {marca.nome} | Fornecedor: {marca.fornecedor} |id: {marca.id}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
};

export default CadastroMarcas;
