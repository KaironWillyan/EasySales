import React, { useState, useEffect } from 'react';
import "./pedido.css"

const ClientePedidosPage = () => {
  const [pedidos, setPedidos] = useState([]);
  const [parcelasPagas, setParcelasPagas] = useState(0);
  const [totalParcelas, setTotalParcelas] = useState(0);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Simulação de chamada para obter os pedidos do cliente do backend
    const obterPedidos = async () => {
      try {
        // Aqui você pode fazer a chamada para o backend e obter os pedidos do cliente
        // Vamos simular alguns pedidos para este exemplo
        const pedidosDoCliente = [
          { id: 1, valor: 1000, parcelas: 3, parcelasPagas: 2 },
          { id: 2, valor: 500, parcelas: 2, parcelasPagas: 2 },
          { id: 3, valor: 2000, parcelas: 4, parcelasPagas: 3 },
        ];
        setPedidos(pedidosDoCliente);
      } catch (error) {
        console.log('Erro ao obter os pedidos:', error);
      }
    };

    obterPedidos();
  }, []);

  useEffect(() => {
    // Calcular a quantidade total de parcelas e a quantidade de parcelas pagas
    let total = 0;
    let pagas = 0;
    pedidos.forEach((pedido) => {
      total += pedido.parcelas;
      pagas += pedido.parcelasPagas;
    });
    setTotalParcelas(total);
    setParcelasPagas(pagas);
  }, [pedidos]);

  const handleEditarParcelas = (pedidoId) => {
    // Lógica para editar as parcelas do pedido com o ID fornecido
    console.log(`Editar parcelas do pedido ${pedidoId}`);
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className='Qpedidos'>
    <div  className= "Pedido1"style={{ fontSize: `${fontSize}px` }}>
      <div className="button-container">
        <button onClick={increaseFontSize}>Aumentar Fonte</button>
        <button onClick={decreaseFontSize}>Diminuir Fonte</button>
      </div>
      <h1>Pedidos do Cliente</h1>
      <div className={`pedidoT`}>
        <p className="pedido-parcelas">Quantidade Total de Parcelas: <span>{totalParcelas}</span></p>
        <p className="pedido-parcelas">Quantidade de Parcelas Pagas: <span>{parcelasPagas}</span></p>
      </div>


      {pedidos.map((pedido) => (
        <div key={pedido.id} className={`pedido ${pedido.parcelasPagas < pedido.parcelas ? 'pedido-azul' : 'pedido-verde'}`}>
          <p>ID do Pedido: {pedido.id}</p>
          <p>Valor do Pedido: R$ {pedido.valor.toFixed(2)}</p>
          <p className="pedido-parcelas">Parcelas: <span>{pedido.parcelas}</span></p>
          <p className="pedido-parcelas">Parcelas Pagas: <span>{pedido.parcelasPagas}</span></p>
          <button className= "editP"onClick={() => handleEditarParcelas(pedido.id)}>Editar Parcelas</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ClientePedidosPage;
