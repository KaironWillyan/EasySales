import React, { useState } from 'react';
import './editar.css'; // Importe o arquivo CSS

const EditClientePage = () => {
  const [cliente, setCliente] = useState({
    nome: 'Nome do Cliente',
    cpf: '123.456.789-00',
    telefone: '(00) 1234-5678',
    logradouro: 'Rua Exemplo, 123',
    bairro: 'Bairro Exemplo',
    cidade: 'Cidade Exemplo',
    cep: '12345-678'
  });
  const [fontSize, setFontSize] = useState(16);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cliente atualizado:', cliente);
    // Aqui você pode adicionar a lógica para enviar os dados atualizados para o backend
  };

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className="container" style={{ fontSize: `${fontSize}px` }}>
        <div className="button-container">
          <button onClick={increaseFontSize}>Aumentar Fonte</button>
          <button onClick={decreaseFontSize}>Diminuir Fonte</button>
        </div>
      <div className="cadastro">
        <h2>Editar Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" name="nome" value={cliente.nome} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input type="text" name="cpf" value={cliente.cpf} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <input type="text" name="telefone" value={cliente.telefone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Logradouro:</label>
            <input type="text" name="logradouro" value={cliente.logradouro} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Bairro:</label>
            <input type="text" name="bairro" value={cliente.bairro} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Cidade:</label>
            <input type="text" name="cidade" value={cliente.cidade} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>CEP:</label>
            <input type="text" name="cep" value={cliente.cep} onChange={handleChange} />
          </div>
          <div className="button-container">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditClientePage;
