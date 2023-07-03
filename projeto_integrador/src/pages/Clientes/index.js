import React, { useState } from 'react';
import './clientes.css';
import { Link } from 'react-router-dom';

const clientes = [
  { id: 1, nome: 'Cliente 1', cpf: '123.456.789-00' },
  { id: 2, nome: 'Cliente 2', cpf: '987.654.321-00' },
  // ... adicione mais clientes aqui, se necessário
];

const Cliente = ({ cliente }) => {
  const handleRealizarVenda = (clienteId) => {
    // Lógica para realizar a venda para o cliente com o ID fornecido
    console.log(`Realizar venda para o cliente ${clienteId}`);
  };

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
        </Link >
        <Link to={"/CadastroVendas"}>
          <button>Realizar Venda</button>
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
