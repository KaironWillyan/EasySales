import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./fornecedores.css";
import { client } from "../../service/http-common";

const PesquisaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true)  
  const [resultado, setResultado] = useState([]);
  const [fontSize, setFontSize] = useState(16);

  async function getFornecedor() {
    try{
       const res = await client.get("http://localhost:8080/fornecedor")
       setFornecedores(res.data)
       console.log(res.data);
    }catch(err){
      console.log("Error");
    }finally{
      setLoading(false)
    }
  }

  useEffect (()=>{
    getFornecedor()
  }, [])
    if(loading){return <h1>Loading</h1>}
  
    console.log(fornecedores);

  const handleInputChange = (event) => {
    setBusca(event.target.value);
  };

  const buscarFornecedores = async () => {
    const resultados = await getFornecedor()
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
        {fornecedores.length === 0 ? (
          <p className="sem-result">Nenhum resultado encontrado.</p>
        ) : (
          <ul className="result-list">
            {fornecedores.map((fornecedor) => (
              <li key={fornecedor.id}>
                <strong>Nome:</strong> {fornecedor.nomeFn} | 
                <strong>Email:</strong> {fornecedor.emailFn} |
                <strong>Telefone:</strong> {fornecedor.telefoneFn} | 
                <strong>Cidade:</strong>{fornecedor.cidadeFn} 
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
