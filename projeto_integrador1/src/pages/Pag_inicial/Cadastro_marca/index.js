import React, { useState } from 'react';
import axios from 'axios';
import "./cadastro.css"

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

  const [fontSize, setFontSize] = useState(16);

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

  const aumentarFonte = () => {
    setFontSize(fontSize + 2);
  };

  const diminuirFonte = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <div className="containerC">
      <div className="cadastro1">
        <div className="button-container">
          <button className="aumentarFonte" onClick={aumentarFonte}>
            Aumentar Fonte
          </button>
          <button className="diminuirFonte" onClick={diminuirFonte}>
            Diminuir Fonte
          </button>
        </div>
        <h2 style={{ fontSize: `${fontSize}px` }}>Cadastro de Fornecedor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label style={{ fontSize: `${fontSize}px` }}>Nome:</label>
            <input
              type="text"
              name="nome"
              value={fornecedor.nome}
              onChange={handleChange}
              style={{ fontSize: `${fontSize}px` }}
            />
          </div>
          <div className="form-group1">
            <label style={{ fontSize: `${fontSize}px` }}>Endereço:</label>
            <input
              type="text"
              name="endereco.bairro"
              value={fornecedor.endereco.bairro}
              onChange={handleChange}
              placeholder="Bairro"
              style={{ fontSize: `${fontSize}px` }}
            />
            <input
              type="text"
              name="endereco.numero"
              value={fornecedor.endereco.numero}
              onChange={handleChange}
              placeholder="Número"
              style={{ fontSize: `${fontSize}px` }}
            />
            <input
              type="text"
              name="endereco.logradouro"
              value={fornecedor.endereco.logradouro}
              onChange={handleChange}
              placeholder="Logradouro"
              style={{ fontSize: `${fontSize}px` }}
            />
            <input
              type="text"
              name="endereco.cep"
              value={fornecedor.endereco.cep}
              onChange={handleChange}
              placeholder="CEP"
              style={{ fontSize: `${fontSize}px` }}
            />
            <input
              type="text"
              name="endereco.cidade"
              value={fornecedor.endereco.cidade}
              onChange={handleChange}
              placeholder="Cidade"
              style={{ fontSize: `${fontSize}px` }}
            />
          </div>
          <div className="form-group1">
            <label style={{ fontSize: `${fontSize}px` }}>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={fornecedor.telefone}
              onChange={handleChange}
              style={{ fontSize: `${fontSize}px` }}
            />
          </div>
          <div className="form-group1">
            <label style={{ fontSize: `${fontSize}px` }}>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={fornecedor.cpf}
              onChange={handleChange}
              style={{ fontSize: `${fontSize}px` }}
            />
          </div>
          <div className="form-group1">
            <label style={{ fontSize: `${fontSize}px` }}>Email:</label>
            <input
              type="email"
              name="email"
              value={fornecedor.email}
              onChange={handleChange}
              style={{ fontSize: `${fontSize}px` }}
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
