
import './cadastro.css'
import {Link} from 'react-router-dom'
/*const CadastroMarcas = () => {
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
        {/* Lembrar de fazer a animação "cadastro realizado com sucesso" 
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

export default CadastroMarcas;*/


import React, { useState } from 'react';
import axios from 'axios';


const CadastroFornecedor = () => {
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    endereco: {
      bairro: '',
      numero: '',
      logradouro: '',
      cep: '',
      cidade: ''
    },
    telefone: '',
    cpf: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFornecedor((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('URL_DA_SUA_API', fornecedor)
      .then((response) => {
        console.log('Fornecedor cadastrado com sucesso!', response.data);
        // Limpar os campos após o cadastro (opcional)
        setFornecedor({
          nome: '',
          endereco: {
            bairro: '',
            numero: '',
            logradouro: '',
            cep: '',
            cidade: ''
          },
          telefone: '',
          cpf: '',
          email: ''
        });
      })
      .catch((error) => {
        console.error('Erro ao cadastrar fornecedor:', error);
      });
  };

  return (
    <div className="containerC">
      <div className="cadastro1">
        <h2>Cadastro de Fornecedor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={fornecedor.nome}
              onChange={handleChange}
            />
          </div>
          <div className="form-group1">
            <label>Endereço:</label>
            <input
              type="text"
              name="endereco.bairro"
              value={fornecedor.endereco.bairro}
              onChange={handleChange}
              placeholder="Bairro"
            />
            <input
              type="text"
              name="endereco.numero"
              value={fornecedor.endereco.numero}
              onChange={handleChange}
              placeholder="Número"
            />
            <input
              type="text"
              name="endereco.logradouro"
              value={fornecedor.endereco.logradouro}
              onChange={handleChange}
              placeholder="Logradouro"
            />
            <input
              type="text"
              name="endereco.cep"
              value={fornecedor.endereco.cep}
              onChange={handleChange}
              placeholder="CEP"
            />
            <input
              type="text"
              name="endereco.cidade"
              value={fornecedor.endereco.cidade}
              onChange={handleChange}
              placeholder="Cidade"
            />
          </div>
          <div className="form-group1">
            <label>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={fornecedor.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group1">
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={fornecedor.cpf}
              onChange={handleChange}
            />
          </div>
          <div className="form-group1">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={fornecedor.email}
              onChange={handleChange}
            />
          </div>
          <div className="button-container1">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroFornecedor;
