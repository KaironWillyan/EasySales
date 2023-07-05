import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import "./pag_inicial.css";
import { client } from "../../service/http-common";

const Minha_marca = () => {
  const [marca, setObjetos] = useState([]);
  const [fontSize, setFontSize] = useState(16);
  const [fornecedores, setFornecedores] = useState([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true)  

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

  const aumentarFonte = () => {
    setFontSize(fontSize + 2);
  };

  const diminuirFonte = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <div className="containerP"> 
   
      <div className="marcas">
        <div className="button-container">
          <button className="aumentarFonte" onClick={aumentarFonte}>
            Aumentar Fonte
          </button>
          <button className="diminuirFonte" onClick={diminuirFonte}>
            Diminuir Fonte
          </button>
        </div>
        <div>
          {fornecedores.map(fn => (
            <Link to={`/marca/${fn.idFn}`}>
              <button className="bt_marca" style={{ fontSize: `${fontSize}px` }}>
                {fn.nomeFn}
              </button>
            </Link>
          ))}
        </div>
      </div>
      </div>
    
  )
};

function Pag_inicial() {
  return (
    <div className="pag_inicial">
      {Minha_marca()}
      <Link to="/cadastroFornecedor">
        <button className="addMarca">+</button>
      </Link>
    </div>
  )
}

export default Pag_inicial
