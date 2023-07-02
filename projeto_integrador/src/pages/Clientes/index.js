import React, { useEffect, useState } from 'react';
import "./clientes.css";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import api from '../../service/store/api';
/*
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 10ef01b0de7587cebc5ce91070f90cb048e61aa2


const clientes = [
  { id: 1, nome: 'Cliente 1', cpf: '123.456.789-00' },
  { id: 2, nome: 'Cliente 2', cpf: '987.654.321-00' },
  // ... adicione mais clientes aqui, se necessário
];

const Cliente = ({ cliente }) => {
  return (
    <div className="info-cli">
      <h3>{cliente.nome}</h3>
      <p>CPF: {cliente.cpf}</p>
      <div className="bt_cli">
        <Link to={`/editar/${cliente.id}`}>
          <button>Editar Cadastro</button>
        </Link>
        <Link to={`/pedidos/${cliente.id}`}>
          <button>Visualizar Pedidos</button>
        </Link>
      </div>
    </div>
  );
};

const Clientes = () => {
  const [clientesData] = useState(clientes);

  return (
    <div>
    <div className="clientes">
      <h1>Clientes Cadastrados</h1>
      {clientesData.map((cliente) => (
        <Cliente key={cliente.id} cliente={cliente} />
      ))}
    </div>
    <div>
        <Link to="/cadastroCliente">
          <button className="addProd">+</button>
        </Link>
    </div>
    </div>
  );
};

export default Clientes;
<<<<<<< HEAD
=======
 */


/* import { Link, useNavigate } from "react-router-dom";
import "./clientes.css";
import React, { useState } from 'react';

function Cliente({ cliente, onEditar, onVisualizarPedidos, onDeletar }) {
  const { id, nome, endereco, telefone, cpf, cidade } = cliente;

  const handleDeletar = () => {
    onDeletar(id);
  };

  return (
    <div className="clientes">
      <div className='info-cli'>
        <p>Nome: {nome}</p>
        <p>Telefone: {telefone}</p>
        <p>Endereço: {endereco}</p>
        <p>CPF: {cpf}</p>
        <p>Cidade: {cidade}</p>
        <div className="bt_cli">
          <button onClick={() => onEditar(cliente)}>Editar</button>
          <button onClick={() => onVisualizarPedidos(cliente)}>Pedidos</button>
          <button onClick={handleDeletar}>Deletar</button>
        </div>
      </div>
    </div>
  );
}

function Clientes() {
  const navigate = useNavigate();

  const [clientes, setClientes] = useState([
    // Dados dos clientes
  ]);

  const handleEditarCliente = (cliente) => {
    navigate(`/${cliente.id}/editarCliente`);
    console.log('Editar cliente:', cliente);
  };

  const handleVisualizarPedidos = (cliente) => {
    // Visualizar pedidos do cliente
  };

  const handleDeletarCliente = (clienteId) => {
    // Solicitar exclusão do cliente para a API
    // Você pode usar a função fetch() ou uma biblioteca como o axios para fazer a solicitação DELETE para a API
    // Depois que a exclusão for bem-sucedida, atualize a lista de clientes exibida
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      {clientes.map((cliente, index) => (
        <Cliente
          key={index}
          cliente={cliente}
          onEditar={handleEditarCliente}
          onVisualizarPedidos={handleVisualizarPedidos}
          onDeletar={handleDeletarCliente}
        />
      ))}
    </div>
  );
}

export default Clientes; */




function Cliente({ cliente, onEditar, onVisualizarPedidos, onDeletar }) {
  const { id, nome, endereco, telefone, cpf, cidade } = cliente;

  return (
    <div className="clientes">
      <div className='info-cli'>
        <p>Nome: {nome}</p>
        <p>Telefone: {telefone}</p>
        <p>Endereço: {endereco}</p>
        <p>CPF: {cpf}</p>
        <p>Cidade: {cidade}</p>
        <div className="bt_cli">
          <button onClick={() => onEditar(cliente)}>Editar</button>
          <button onClick={() => onVisualizarPedidos(cliente)}>Pedidos</button>
{/*           <button onClick={() => onDeletar(id)}>Deletar</button>
 */}        </div>
      </div>
    </div>
  );
}

function Clientes() {
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

  useEffect(()=>{
    api
      .get("/cliente")
      .then((response)=>setClientes(response.data))
      .catch((err)=>{
        console.error('Cliente n encontrado' + err);
      });
    }, [])

    


  const [pedidos, setPedidos] = useState([
    {
      cliente: 'João',
      pedido: 'Item 1, Item 2'
    },
    {
      cliente: 'Maria',
      pedido: 'Item 3, Item 4'
    }
    // Adicione mais pedidos aqui, se necessário
  ]);

  const handleEditarCliente = (cliente) => {
    console.log('Editar cliente:', cliente);
  };

  const handleVisualizarPedidos = (cliente) => {
    const pedidosCliente = pedidos.filter((pedido) => pedido.cliente === cliente.nome);
    console.log('Pedidos do cliente:', pedidosCliente);
  };

  const handleDeletarCliente = (clienteId) => {
    setClientes(clientes.filter(cliente => cliente.id !== clienteId));
    console.log('Cliente excluído com sucesso');
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      {clientes.map((cliente, index) => (
        <Cliente
          key={index}
          cliente={cliente}
          onEditar={handleEditarCliente}
          onVisualizarPedidos={handleVisualizarPedidos}
          onDeletar={handleDeletarCliente}
        />
      ))}
    </div>
  );
}

export default Clientes;

>>>>>>> 10ef01b0de7587cebc5ce91070f90cb048e61aa2
