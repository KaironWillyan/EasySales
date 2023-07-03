import React, { useState } from 'react';
<<<<<<< HEAD
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cliente atualizado:', cliente);
    // Aqui você pode adicionar a lógica para enviar os dados atualizados para o backend
  };

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  return (
    <div className="container"> {/* Adicione a classe "container" */}
      <div className="cadastro"> {/* Adicione a classe "cadastro" */}
        <h2>Editar Cliente</h2> {/* Adicione a tag h2 com o texto "Editar Cliente" */}
        <form onSubmit={handleSubmit}>
          <div className="form-group"> {/* Adicione a classe "form-group" */}
            <label>Nome:</label> {/* Adicione as tags label */}
            <input type="text" name="nome" value={cliente.nome} onChange={handleChange} />
          </div>
          <div className="form-group"> {/* Adicione a classe "form-group" */}
            <label>CPF:</label> {/* Adicione as tags label */}
            <input type="text" name="cpf" value={cliente.cpf} onChange={handleChange} />
          </div>
          <div className="form-group"> {/* Adicione a classe "form-group" */}
            <label>Telefone:</label> {/* Adicione as tags label */}
            <input type="text" name="telefone" value={cliente.telefone} onChange={handleChange} />
          </div>
          <div className="form-group"> {/* Adicione a classe "form-group" */}
            <label>Logradouro:</label> {/* Adicione as tags label */}
            <input type="text" name="logradouro" value={cliente.logradouro} onChange={handleChange} />
          </div>
          <div className="form-group"> 
            <label>Bairro:</label> {/* Adicione as tags label */}
            <input type="text" name="bairro" value={cliente.bairro} onChange={handleChange} />
          </div>
          <div className="form-group"> 
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
=======

const ClienteDadds = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');

  const handleUpdate = () => {
    // Aqui você pode implementar a lógica para atualizar os dados do cliente
    console.log('Dados atualizados:', {
      nome,
      cpf,
      telefone,
      logradouro,
      bairro,
      cidade,
      cep
    });
  };

  return (
    <div>
      <h1>Formulário do Cliente</h1>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <br />
      <label>
        CPF:
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </label>
      <br />
      <label>
        Telefone:
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </label>
      <br />
      <label>
        Logradouro:
        <input
          type="text"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        />
      </label>
      <br />
      <label>
        Bairro:
        <input
          type="text"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
      </label>
      <br />
      <label>
        Cidade:
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
      </label>
      <br />
      <label>
        CEP:
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleUpdate}>Atualizar</button>
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
    </div>
  );
};

<<<<<<< HEAD
export default EditClientePage;
=======
export default ClienteDadds;
 





>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
