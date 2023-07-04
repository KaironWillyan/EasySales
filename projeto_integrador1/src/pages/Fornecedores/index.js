import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./fornecedores.css";

const API_URL = 'https://exemplo.com/api/fornecedores'; // Substitua pelo URL da sua API

const PesquisaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState([]);
  const [fontSize, setFontSize] = useState(16);

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

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className="container1">
      <div className="button-container2">
        <button onClick={increaseFontSize}>Aumentar Fonte</button>
        <button onClick={decreaseFontSize}>Diminuir Fonte</button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={busca}
          onChange={handleInputChange}
          className="search-input"
          placeholder="Digite o nome do fornecedor:"
          style={{ fontSize: `${fontSize}px` }}
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
      {/* <Link to="/cadastroFornecedor">
        <button className="addProd">+</button>
      </Link> */}
    </div>
  );
};

export default PesquisaFornecedores;
