import React, { useState } from 'react';
import './cadastroP.css';
// import api from '../../../service/api';

/* const CadastroProduto = () => {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [quantidadeAdquirida, setQuantidadeAdquirida] = useState('');
  const [id, setId] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nomeProduto') {
      setNomeProduto(value);
    } else if (name === 'quantidadeAdquirida') {
      setQuantidadeAdquirida(value);
    } else if (name === 'id') {
      setId(value);
    }
  };

  const handleCadastroProduto = () => {
    if (nomeProduto.trim() === '' || quantidadeAdquirida.trim() === '' || id.trim() === '') {
      return;
    }

    const novoProduto = {
      nomeProduto,
      quantidadeAdquirida,
      id,
    };

    setProdutos([...produtos, novoProduto]);
    setNomeProduto('');
    setQuantidadeAdquirida('');
    setId('');
  };

  return (
    <div className="container">
      <div className="cadastro">
        <h2>Cadastro de Produtos</h2>
        <div className="form-group">
          
          <input
            type="text"
            name="nomeProduto"
            value={nomeProduto}
            onChange={handleInputChange}
            placeholder="Digite o nome do produto"
          />
        </div>
        <div className="form-group">
         
          <input
            type="text"
            name="quantidadeAdquirida"
            value={quantidadeAdquirida}
            onChange={handleInputChange}
            placeholder="Digite a quantidade adquirida"
          />
        </div>
        <div className="form-group">
         
          <input
            type="text"
            name="id"
            value={id}
            onChange={handleInputChange}
            placeholder="Digite o ID"
          />
        </div>
        <div className="button-container">
          <button onClick={handleCadastroProduto}>Cadastrar</button>
        </div>
      </div>
      </div>
  );
};

export default CadastroProduto; */









/* function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleValueChange = (event) => {
    setValue(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: name,
      quantity: quantity,
      value: value,
    };

    setProducts([...products, newProduct]);
    setName('');
    setQuantity(0);
    setValue(0);
  };

  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Quantidade:
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </label>
        <br />
        <label>
          Valor:
          <input type="number" value={value} onChange={handleValueChange} />
        </label>
        <br />
        <button type="submit">Adicionar</button>
      </form>
      <h2>Produtos cadastrados:</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - Quantidade: {product.quantity} - Valor: {product.value}
          </li>
        ))}
      </ul>
      <button onClick={() => console.log("Cadastrar")}>Cadastrar</button>
    </div>
  );
}

export default App;
 */

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleValueChange = (event) => {
    setValue(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: name,
      quantity: quantity,
      value: value,
    };

    setProducts([...products, newProduct]);
    setName('');
    setQuantity(0);
    setValue(0);
  };

  const handleCadastrar = () => {
    // api.post('http://example.com/endpoint', products)
    //   .then(response => {
    //     console.log('Produtos enviados com sucesso!', response);
    //     // Realize outras ações de acordo com a resposta do servidor
    //   })
    //   .catch(error => {
    //     console.error('Erro ao enviar produtos:', error);
    //     // Lide com o erro de acordo com as necessidades do seu aplicativo
    //   });
  };

  return (
    <div className="container">
      <div className="cadastro">
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label>Quantidade:</label>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
          </div>
          <div className="form-group">
            <label>Valor:</label>
            <input type="number" value={value} onChange={handleValueChange} />
          </div>
          <div className="button-container">
            <button type="submit">Adicionar</button>
          </div>
        </form>
        <h2>Produtos cadastrados:</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - Quantidade: {product.quantity} - Valor: {product.value}
            </li>
          ))}
        </ul>
        <div className="button-container">
          <button onClick={handleCadastrar}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
