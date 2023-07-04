import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



/* const API_URL = 'https://exemplo.com/api/vendas'; // Substitua pelo URL da sua API de vendas

const VendasCliente = ({ clienteId }) => {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    fetchVendas();
  }, []);

  const fetchVendas = async () => {
    try {
      const response = await fetch(`${API_URL}?clienteId=${clienteId}`);
      const data = await response.json();
      setVendas(data);
    } catch (error) {
      console.error('Erro ao buscar vendas:', error);
    }
  };

  const handleEditarVenda = (vendaId) => {
    // Lógica para editar a venda com o ID fornecido
    console.log(`Editar venda com ID ${vendaId}`);
  };

  return (
    <div>
      <h2>Vendas do Cliente</h2>
      {vendas.length === 0 ? (
        <p>Nenhuma venda encontrada para este cliente.</p>
      ) : (
        <ul>
          {vendas.map((venda) => (
            <li key={venda.id}>
              <strong>ID da Venda:</strong> {venda.id} |{' '}
              <strong>Número de Parcelas:</strong> {venda.numParcelas} |{' '}
              <button onClick={() => handleEditarVenda(venda.id)}>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VendasCliente;
 */



const vendasArray = [
  { id: 1, clienteId: 1, numParcelas: 3 },
  { id: 2, clienteId: 1, numParcelas: 2 },
  { id: 3, clienteId: 2, numParcelas: 4 },
  { id: 4, clienteId: 2, numParcelas: 1 },
  // Adicione mais vendas ao array conforme necessário
];

const VendasCliente = ({ clienteId }) => {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    fetchVendas();
  }, []);

  const fetchVendas = () => {
    const vendasCliente = vendasArray.filter((venda) => venda.clienteId === clienteId);
    setVendas(vendasCliente);
  };

  const handleEditarVenda = (vendaId) => {
    // Lógica para editar a venda com o ID fornecido
    console.log(`Editar venda com ID ${vendaId}`);
  };

  return (
    <div>
      <h2>Vendas do Cliente</h2>
      {vendas.length === 0 ? (
        <p>Nenhuma venda encontrada para este cliente.</p>
      ) : (
        <ul>
          {vendas.map((venda) => (
            <li key={venda.id}>
              <strong>ID da Venda:</strong> {venda.id} |{' '}
              <strong>Número de Parcelas:</strong> {venda.numParcelas} |{' '}
              <button onClick={() => handleEditarVenda(venda.id)}>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VendasCliente;
