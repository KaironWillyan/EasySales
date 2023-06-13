import "./editar.css"

/* import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarCliente() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    cpf: '',
    cidade: ''
  });

  useEffect(() => {
    // Simule uma chamada à API para obter os dados do cliente com base no ID
    fetch(`sua-api-clientes/${id}`)
      .then(response => response.json())
      .then(data => {
        setCliente(data);
        setFormData({
          nome: data.nome,
          endereco: data.endereco,
          telefone: data.telefone,
          cpf: data.cpf,
          cidade: data.cidade
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simule uma chamada à API para atualizar os dados do cliente
    fetch(`sua-api-clientes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Dados atualizados:', data);
        navigate('/clientes'); // Redirecionar para a página de clientes após salvar as alterações
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!cliente) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="container">
      <h1 className="heading">Editar Cliente</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button">Salvar</button>
      </form>
    </div>
  );
}

export default EditarCliente;

 */


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function EditarCliente() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nome: 'João',
      endereco: 'Rua A, 123',
      telefone: '123456789',
      cpf: '123.456.789-00',
      cidade: 'São Paulo'
    },
    {
      id: 2,
      nome: 'Maria',
      endereco: 'Rua B, 456',
      telefone: '987654321',
      cpf: '987.654.321-00',
      cidade: 'Rio de Janeiro'
    }
    // Adicione mais clientes aqui, se necessário
  ]);
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    cpf: '',
    cidade: ''
  });

  useEffect(() => {
    // Encontre o cliente com base no ID
    const cliente = clientes.find(cliente => cliente.id === parseInt(id));
    if (cliente) {
      setFormData({
        nome: cliente.nome,
        endereco: cliente.endereco,
        telefone: cliente.telefone,
        cpf: cliente.cpf,
        cidade: cliente.cidade
      });
    }
  }, [id, clientes]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Atualize os dados do cliente no array local
    const clienteAtualizado = {
      id: parseInt(id),
      ...formData
    };

    const clientesAtualizados = clientes.map(cliente => {
      if (cliente.id === clienteAtualizado.id) {
        return clienteAtualizado;
      }
      return cliente;
    });

    setClientes(clientesAtualizados);
    navigate('/clientes'); // Redirecionar para a página de clientes após salvar as alterações
  };

  return (
    <div className="container">
      <div className="cadastro">
        <h2>Editar Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Endereço:</label>
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Cidade:</label>
            <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarCliente;
