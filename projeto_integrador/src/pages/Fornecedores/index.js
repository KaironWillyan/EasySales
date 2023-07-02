import { Link } from "react-router-dom"
 import { useEffect, useState } from "react"
 import "./fornecedores.css"
/*

const API_URL = 'https://exemplo.com/api/fornecedores'; // Substitua pelo URL da sua API

const PesquisaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    fetchFornecedores();
  }, []);

  const fetchFornecedores = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFornecedores(data);
    } catch (error) {
      console.error('Erro ao buscar fornecedores:', error);
    }
  };

  const handleInputChange = (event) => {
    setBusca(event.target.value);
  };

  const buscarFornecedores = () => {
    const resultados = fornecedores.filter((fornecedor) =>
      fornecedor.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setResultado(resultados);
  };

  return (
    <div>
      <h2>Pesquisa de Fornecedores</h2>
      <input
        type="text"
        value={busca}
        onChange={handleInputChange}
        placeholder="Digite o nome do fornecedor"
      />
      <button onClick={buscarFornecedores}>Buscar</button>

      <h3>Resultados:</h3>
      {resultado.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        <ul>
          {resultado.map((fornecedor) => (
            <li key={fornecedor.id}>
              Nome: {fornecedor.nome} | Endereço: {fornecedor.endereco} | Telefone: {fornecedor.telefone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PesquisaFornecedores;
 */




/* const API_URL = 'https://exemplo.com/api/fornecedores'; // Substitua pelo URL da sua API

const PesquisaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    fetchFornecedores();
  }, []);

  const fetchFornecedores = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFornecedores(data);
    } catch (error) {
      console.error('Erro ao buscar fornecedores:', error);
    }
  };

  const handleInputChange = (event) => {
    setBusca(event.target.value);
  };

  const buscarFornecedores = () => {
    const resultados = fornecedores.filter((fornecedor) =>
      fornecedor.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setResultado(resultados);
  };

  return (
    <div className="container">
      <h2 className="title">Pesquisa de Fornecedores</h2>
      <div className="search-container">
        <input
          type="text"
          value={busca}
          onChange={handleInputChange}
          placeholder="Digite o nome do fornecedor"
          className="search-input"
        />
        <button onClick={buscarFornecedores} className="search-button">Buscar</button>
      </div>

      <h3>Resultados:</h3>
      {resultado.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        <ul className="result-list">
          {resultado.map((fornecedor) => (
            <li key={fornecedor.id}>
              <strong>Nome:</strong> {fornecedor.nome} | <strong>Endereço:</strong> {fornecedor.endereco} | <strong>Telefone:</strong> {fornecedor.telefone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PesquisaFornecedores; */







/* const API_URL = 'https://exemplo.com/api/fornecedores'; // Substitua pelo URL da sua API

const PesquisaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    fetchFornecedores();
  }, []);

  const fetchFornecedores = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFornecedores(data);
    } catch (error) {
      console.error('Erro ao buscar fornecedores:', error);
    }
  };

  const handleInputChange = (event) => {
    setBusca(event.target.value);
  };

  const buscarFornecedores = () => {
    const resultados = fornecedores.filter((fornecedor) =>
      fornecedor.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setResultado(resultados);
  };

  return (
    <div className="container">
  <div className="input-container">
    <h3 className="subtitle">Digite o nome do fornecedor:</h3>
    <input
      type="text"
      value={busca}
      onChange={handleInputChange}
      className="search-input"
    />
    <button onClick={buscarFornecedores} className="search-button">
      Buscar
    </button>
  </div>
<div>
  <h3 className="subtitle">Resultados:</h3>
  {resultado.length === 0 ? (
    <p>Nenhum resultado encontrado.</p>
  ) : (
    <ul className="result-list">
      {resultado.map((fornecedor) => (
        <li key={fornecedor.id}>
          <strong>Nome:</strong> {fornecedor.nome} | <strong>Endereço:</strong> {fornecedor.endereco} | <strong>Telefone:</strong> {fornecedor.telefone}
        </li>
      ))}
    </ul>
  )}
  </div>
  <Link  to="/cadastroFornecedor">
                <button className="addProd">+</button>
            </Link>
</div>

  );
};

export default PesquisaFornecedores;
 */



const API_URL = 'https://exemplo.com/api/fornecedores'; // Substitua pelo URL da sua API

const PesquisaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    fetchFornecedores();
  }, []);

  const fetchFornecedores = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFornecedores(data);
    } catch (error) {
      console.error('Erro ao buscar fornecedores:', error);
    }
  };

  const handleInputChange = (event) => {
    setBusca(event.target.value);
  };

  const buscarFornecedores = () => {
    const resultados = fornecedores.filter((fornecedor) =>
      fornecedor.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setResultado(resultados);
  };

  return (
    <div className="container1">
  <div className="input-container">
   
    <input
      type="text"
      value={busca}
      onChange={handleInputChange}
      className="search-input"
      placeholder="Digite o nome do fornecedor:"
    />
    <button onClick={buscarFornecedores} className="search-button">
      Buscar
    </button>
  </div>
<div className="resultados">
  <h3 className="subtitle">Resultados:</h3>
  {resultado.length === 0 ? (
    <p className="sem-result">Nenhum resultado encontrado.</p>
  ) : (
    <ul className="result-list">
      {resultado.map((fornecedor) => (
        <li key={fornecedor.id}>
          <strong>Nome:</strong> {fornecedor.nome} | <strong>Email:</strong> {fornecedor.endereco} | <strong>Telefone:</strong> {fornecedor.telefone} | <strong>Cidade:</strong>{fornecedor.cidade} 
        </li>
      ))}
    </ul>
  )}
  </div>
  <Link to="/cadastroFornecedor">
        <button className="addProd">+</button>
      </Link> 
</div>

  );
};

export default PesquisaFornecedores;
