/* import React, { useState } from 'react';

const CadastroVendas = () => {
  const [cliente, setCliente] = useState('');
  const [cpfCliente, setCpfCliente] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = useState('');
  const [valorProduto, setValorProduto] = useState(0);
  const [fornecedor, setFornecedor] = useState('');
  const [valorTotal, setValorTotal] = useState(0);
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [parcelado, setParcelado] = useState(false);
  const [numParcelas, setNumParcelas] = useState(1);

  const handleClienteChange = (event) => {
    setCliente(event.target.value);
  };

  const handleCPFClienteChange = (event) => {
    setCpfCliente(event.target.value);
  };

  const handleProdutoChange = (event) => {
    setProduto(event.target.value);
  };

  const handleValorProdutoChange = (event) => {
    setValorProduto(parseFloat(event.target.value));
  };

  const handleFornecedorChange = (event) => {
    setFornecedor(event.target.value);
  };

  const handleMetodoPagamentoChange = (event) => {
    setMetodoPagamento(event.target.value);
  };

  const handleParceladoChange = (event) => {
    setParcelado(event.target.checked);
  };

  const handleNumParcelasChange = (event) => {
    setNumParcelas(parseInt(event.target.value));
  };

  const adicionarProduto = () => {
    const novoProduto = {
      nome: produto,
      valor: valorProduto,
      fornecedor: fornecedor,
    };

    setProdutos([...produtos, novoProduto]);
    setValorTotal(valorTotal + valorProduto);
    setProduto('');
    setValorProduto(0);
    setFornecedor('');
  };

  const cadastrarVenda = () => {
    // Aqui você pode fazer o envio dos dados para a API ou fazer o tratamento desejado
    // por exemplo, exibir um alerta com as informações da venda.
    alert(`Venda cadastrada:
    Cliente: ${cliente}
    CPF: ${cpfCliente}
    Produtos: ${JSON.stringify(produtos)}
    Valor Total: ${valorTotal}
    Método de Pagamento: ${metodoPagamento}
    Parcelado: ${parcelado ? 'Sim' : 'Não'}
    Número de Parcelas: ${numParcelas}`);
  };

  return (
    <div>
      <h2>Cadastro de Vendas</h2>

      <div>
        <label>Nome do Cliente:</label>
        <input type="text" value={cliente} onChange={handleClienteChange} />
      </div>

      <div>
        <label>CPF do Cliente:</label>
        <input type="text" value={cpfCliente} onChange={handleCPFClienteChange} />
      </div>

      <h3>Produtos:</h3>
      <table>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Valor</th>
            <th>Fornecedor</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index}>
              <td>{produto.nome}</td>
              <td>{produto.valor}</td>
              <td>{produto.fornecedor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <label>Nome do Produto:</label>
        <input type="text" value={produto} onChange={handleProdutoChange} />
      </div>

      <div>
        <label>Valor do Produto:</label>
        <input type="number" value={valorProduto} onChange={handleValorProdutoChange} />
      </div>

      <div>
        <label>Fornecedor:</label>
        <select value={fornecedor} onChange={handleFornecedorChange}>
          <option value="">Selecione o fornecedor</option>
          <option value="Fornecedor 1">Fornecedor 1</option>
          <option value="Fornecedor 2">Fornecedor 2</option>
          <option value="Fornecedor 3">Fornecedor 3</option>
        </select>
      </div>

      <div>
        <button onClick={adicionarProduto}>Adicionar Produto</button>
      </div>

      <div>
        <label>Valor Total: R$ {valorTotal.toFixed(2)}</label>
      </div>

      <div>
        <label>Método de Pagamento:</label>
        <input type="text" value={metodoPagamento} onChange={handleMetodoPagamentoChange} />
      </div>

      <div>
        <label>Parcelado:</label>
        <input type="checkbox" checked={parcelado} onChange={handleParceladoChange} />
      </div>

      {parcelado && (
        <div>
          <label>Número de Parcelas:</label>
          <input type="number" value={numParcelas} onChange={handleNumParcelasChange} />
        </div>
      )}

      <div>
        <button onClick={cadastrarVenda}>Cadastrar Venda</button>
      </div>
    </div>
  );
};

export default CadastroVendas;
 */




import React, { useState } from 'react';


const CadastroVendas = () => {
  const [cliente, setCliente] = useState('');
  const [cpfCliente, setCpfCliente] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = useState('');
  const [valorProduto, setValorProduto] = useState(0);
  const [fornecedor, setFornecedor] = useState('');
  const [valorTotal, setValorTotal] = useState(0);
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [parcelado, setParcelado] = useState(false);
  const [numParcelas, setNumParcelas] = useState(1);

  const handleClienteChange = (event) => {
    setCliente(event.target.value);
  };

  const handleCPFClienteChange = (event) => {
    setCpfCliente(event.target.value);
  };

  const handleProdutoChange = (event) => {
    setProduto(event.target.value);
  };

  const handleValorProdutoChange = (event) => {
    setValorProduto(parseFloat(event.target.value));
  };

  const handleFornecedorChange = (event) => {
    setFornecedor(event.target.value);
  };

  const handleMetodoPagamentoChange = (event) => {
    setMetodoPagamento(event.target.value);
  };

  const handleParceladoChange = (event) => {
    setParcelado(event.target.checked);
  };

  const handleNumParcelasChange = (event) => {
    setNumParcelas(parseInt(event.target.value));
  };

  const adicionarProduto = () => {
    const novoProduto = {
      nome: produto,
      valor: valorProduto,
      fornecedor: fornecedor,
    };

    setProdutos([...produtos, novoProduto]);
    setValorTotal(valorTotal + valorProduto);
    setProduto('');
    setValorProduto(0);
    setFornecedor('');
  };

  const cadastrarVenda = () => {
    // Aqui você pode fazer o envio dos dados para a API ou fazer o tratamento desejado
    // por exemplo, exibir um alerta com as informações da venda.
    alert(`Venda cadastrada:
    Cliente: ${cliente}
    CPF: ${cpfCliente}
    Produtos: ${JSON.stringify(produtos)}
    Valor Total: ${valorTotal}
    Método de Pagamento: ${metodoPagamento}
    Parcelado: ${parcelado ? 'Sim' : 'Não'}
    Número de Parcelas: ${numParcelas}`);
  };

  return (
    <div className='container'>
      <div className='cadastro'>
        <h2>Cadastro de Vendas</h2>

        <div className='form-group'>
          <label>Nome do Cliente:</label>
          <input type='text' value={cliente} onChange={handleClienteChange} />
        </div>

        <div className='form-group'>
          <label>CPF do Cliente:</label>
          <input type='text' value={cpfCliente} onChange={handleCPFClienteChange} />
        </div>

        <h3>Produtos:</h3>
        <table>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Valor</th>
              <th>Fornecedor</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={index}>
                <td>{produto.nome}</td>
                <td>{produto.valor}</td>
                <td>{produto.fornecedor}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='form-group'>
          <label>Nome do Produto:</label>
          <input type='text' value={produto} onChange={handleProdutoChange} />
        </div>

        <div className='form-group'>
          <label>Valor do Produto:</label>
          <input type='number' value={valorProduto} onChange={handleValorProdutoChange} />
        </div>

        <div className='form-group'>
          <label>Fornecedor:</label>
          <select value={fornecedor} onChange={handleFornecedorChange}>
            <option value=''>Selecione o fornecedor</option>
            <option value='Fornecedor 1'>Fornecedor 1</option>
            <option value='Fornecedor 2'>Fornecedor 2</option>
            <option value='Fornecedor 3'>Fornecedor 3</option>
          </select>
        </div>

        <div>
          <button onClick={adicionarProduto}>Adicionar Produto</button>
        </div>

        <div>
          <label>Valor Total: R$ {valorTotal.toFixed(2)}</label>
        </div>

        <div className='form-group'>
          <label>Método de Pagamento:</label>
          <input type='text' value={metodoPagamento} onChange={handleMetodoPagamentoChange} />
        </div>

        <div className='form-group'>
          <label>Parcelado:</label>
          <input type='checkbox' checked={parcelado} onChange={handleParceladoChange} />
        </div>

        {parcelado && (
          <div className='form-group'>
            <label>Número de Parcelas:</label>
            <input type='number' value={numParcelas} onChange={handleNumParcelasChange} />
          </div>
        )}

        <div>
          <button onClick={cadastrarVenda}>Cadastrar Venda</button>
        </div>
      </div>
    </div>
  );
};

export default CadastroVendas;
