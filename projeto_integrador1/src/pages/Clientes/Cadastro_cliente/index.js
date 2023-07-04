import React, { useState } from 'react';

const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    cep: ''
  });
  const [fontSize, setFontSize] = useState(16);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do cliente para o servidor
    console.log('Dados do cliente:', cliente);
    // Limpar o formulário após o envio
    setCliente({
      nome: '',
      cpf: '',
      telefone: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      cep: ''
    });
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className="containerC" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="cadastro1" style={{ marginTop: '15%', backgroundColor: '#e7e5e5', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="button-container1" style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
          <button onClick={increaseFontSize} style={{ borderRadius: '20px', padding: '10px 20px', background: '#1DB4F2', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Aumentar Fonte
          </button>
          <button onClick={decreaseFontSize} style={{ borderRadius: '20px', padding: '10px 20px', background: '#1DB4F2', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Diminuir Fonte
          </button>
        </div>
        <h1 style={{ textAlign: 'center' }}>Cadastro de Cliente</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Nome:</label>
            <input
              type="text"
              name="nome"
              value={cliente.nome}
              onChange={handleChange}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={cliente.cpf}
              onChange={handleChange}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={cliente.telefone}
              onChange={handleChange}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Logradouro:</label>
            <input
              type="text"
              name="logradouro"
              value={cliente.logradouro}
              onChange={handleChange}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Bairro:</label>
            <input
              type="text"
              name="bairro"
              value={cliente.bairro}
              onChange={handleChange}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Cidade:</label>
            <input
              type="text"
              name="cidade"
              value={cliente.cidade}
              onChange={handleChange}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>CEP:</label>
            <input
              type="text"
              name="cep"
              value={cliente.cep}
              onChange={handleChange}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="button-container1" style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
            <button type="submit" style={{ borderRadius: '20px', padding: '10px 20px', background: '#1DB4F2', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;
