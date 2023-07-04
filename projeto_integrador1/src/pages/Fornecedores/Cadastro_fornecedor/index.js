import React, { useState } from 'react';
import './cadastroF.css'; // Importe o arquivo CSS correspondente

const CadastroFornecedor = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [fontSize, setFontSize] = useState(16);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui fazer o envio dos dados para a API ou realizar outras ações necessárias

    // Após o envio dos dados, você pode limpar os campos do formulário
    setNome('');
    setEmail('');
    setEndereco('');
    setTelefone('');

    // Ou exibir uma mensagem de sucesso, etc.
    alert('Fornecedor cadastrado com sucesso!');
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={increaseFontSize}>Aumentar Fonte</button>
        <button onClick={decreaseFontSize}>Diminuir Fonte</button>
      </div>
      <div className="cadastro" style={{ fontSize: `${fontSize}px` }}>
        <h2>Cadastro de Fornecedor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <label htmlFor="nome">Nome:</label> */}
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={handleNomeChange}
              required
              placeholder='Nome fornecedor:'
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder='Email:'
            />
          </div>
          <div className="form-group">
           {/*  <label htmlFor="endereco">Endereço:</label> */}
            <input
              type="text"
              id="endereco"
              value={endereco}
              onChange={handleEnderecoChange}
              required
              placeholder='Endereço:'
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="telefone">Telefone:</label> */}
            <input
              type="text"
              id="telefone"
              value={telefone}
              onChange={handleTelefoneChange}
              required
              placeholder='Telefone:'
            />
          </div>
          <div className="button-container">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroFornecedor;
