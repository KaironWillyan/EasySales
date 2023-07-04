import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./vendas.css"


/* const API_URL = 'https://exemplo.com/api/fornecedores'; // Substitua pelo URL da sua API

const PesquisaCliente = () => {
  const [cliente, setCliente] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    fetchFornecedores();
  }, []);

  const fetchFornecedores = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCliente(data);
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
    }
  };

  const handleInputChange = (event) => {
    setBusca(event.target.value);
  };

  const buscarCliente = () => {
    const resultados = cliente.filter((fornecedor) =>
      fornecedor.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setResultado(resultados);
  };

  return (
    <div className="container1">
  <div className="input-container">
   
    <input
      type="text"
      value={busca}
      onChange={handleInputChange}
      className="search-input"
      placeholder="Digite o nome do cliente:"
    />
    <button onClick={buscarCliente} className="search-button">
      Buscar
    </button>
  </div>
<div className="resultados">
  <h3 className="subtitle">Resultados:</h3>
  {resultado.length === 0 ? (
    <p className="sem-result">Nenhum resultado encontrado.</p>
  ) : (
    <ul className="result-list">
      {resultado.map((cliente) => (
        <a>
            <button>
            <strong>Nome:</strong> {cliente.nome} | <strong>CPF:</strong> {cliente.cpf} | <strong>Telefone:</strong> {cliente.telefone}
            </button>
        </a>
      ))}
    </ul>
  )}
  </div>
  <Link  to="/cadastroFornecedor">
                <button className="addProd">+</button>
            </Link>
</div>

  );
};
export default PesquisaCliente; */


/* import { useState, useEffect } from 'react'; */

/* const dataArray = [
  { id: 1, nome: 'Maria', cpf: '111.111.111-11', telefone: '1111111111' },
  { id: 2, nome: 'Joao', cpf: '222.222.222-22', telefone: '2222222222' },
  { id: 3, nome: 'Mila', cpf: '333.333.333-33', telefone: '3333333333' },
  { id: 4, nome: 'Mila2', cpf: '333.333.333-33', telefone: '3333333333' },
  { id: 5, nome: 'Mila3', cpf: '333.333.333-33', telefone: '3333333333' },
  // Adicione mais itens ao array conforme necessário
];

const PesquisaCliente = () => {
  const [cliente, setCliente] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    setCliente(dataArray);
  }, []);

  const handleInputChange = (event) => {
    setBusca(event.target.value);
  };

  const buscarCliente = () => {
    const resultados = cliente.filter((fornecedor) =>
      fornecedor.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setResultado(resultados);
  };

  return (
    <div className="container1">
      <div className="input-container">
        <input
          type="text"
          value={busca}
          onChange={handleInputChange}
          className="search-input"
          placeholder="Digite o nome do cliente:"
        />
        <button onClick={buscarCliente} className="search-button">
          Buscar
        </button>
      </div>
      <div className="resultados">
        <h3 className="subtitle">Resultados:</h3>
        {resultado.length === 0 ? (
          <p className="sem-result">Nenhum resultado encontrado.</p>
        ) : (
          <ul className="result-list">
            {resultado.map((cliente) => (
                <Link to = {`/venda/${cliente.nome}/${cliente.cpf}`}>
              <a>
                <button className="bt_resultCli">
                  <strong>Nome:</strong> {cliente.nome} |  <strong>CPF:</strong> {cliente.cpf} | {' '}
                  <strong>Telefone:</strong> {cliente.telefone}
                </button>
              </a>
                </Link>
            ))}
          </ul>
        )}
      </div>
       <Link to="/CadastroVendas">
        <button className="addProd">+</button>
      </Link> 
    </div>
  );
};

export default PesquisaCliente; */



/* 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './vendas.css'; */

const dataArray = [
  { id: 1, nome: 'Maria', cpf: '111.111.111-11', telefone: '1111111111' },
  { id: 2, nome: 'Joao', cpf: '222.222.222-22', telefone: '2222222222' },
  { id: 3, nome: 'Mila', cpf: '333.333.333-33', telefone: '3333333333' },
  { id: 4, nome: 'Mila2', cpf: '333.333.333-33', telefone: '3333333333' },
  { id: 5, nome: 'Mila3', cpf: '333.333.333-33', telefone: '3333333333' },
  // Adicione mais itens ao array conforme necessário
];

const PesquisaCliente = () => {
  const [cliente, setCliente] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    setCliente(dataArray);
  }, []);

  const handleInputChange = (event) => {
    setBusca(event.target.value);
  };

  const buscarCliente = () => {
    const resultados = cliente.filter((cliente) =>
      cliente.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setResultado(resultados);
  };

  return (
    <div className="container1">
      <div className="input-container">
        <input
          type="text"
          value={busca}
          onChange={handleInputChange}
          className="search-input"
          placeholder="Digite o nome do cliente:"
        />
        <button onClick={buscarCliente} className="search-button">
          Buscar
        </button>
      </div>
      <div className="resultados">
        <h3 className="subtitle">Resultados:</h3>
        {resultado.length === 0 ? (
          <p className="sem-result">Nenhum resultado encontrado.</p>
        ) : (
          <ul className="result-list">
            {resultado.map((cliente) => (
                <Link to={`/venda/${cliente.cpf}`} >
              <li key={cliente.id}>
                  <button className="bt_resultCli">
                    <strong>Nome:</strong> {cliente.nome} | <strong>CPF:</strong> {cliente.cpf} |{' '}
                    <strong>Telefone:</strong> {cliente.telefone}
                  </button>
              </li>
                </Link>
            ))}
          </ul>
        )}
      </div>
      <Link to="/CadastroVendas">
        <button className="addProd">+</button>
      </Link>
    </div>
  );
};

export default PesquisaCliente;

