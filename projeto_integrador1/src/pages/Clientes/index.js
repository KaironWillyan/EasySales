import React, { useEffect, useState } from 'react';
import './clientes.css';
import { Link } from 'react-router-dom';
import { client } from '../../service/http-common';

const Clientes = () => {
  const [cliente, setCliente] = useState([]);
  const [loading, setLoading] = useState(true)  
  const [fontSize, setFontSize] = useState(16);
  
  async function getClient() {
    try{
       const res = await client.get("http://localhost:8080/cliente")
       setCliente(res.data)
       console.log(res.data);
    }catch(err){
      console.log("Error");
    }finally{
      setLoading(false)
    }
  }

  useEffect (()=>{
    getClient()
  }, [])
    if(loading){return <h1>Loading</h1>}
  
    console.log(cliente);

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
      <div className=''>
        <div className="clientes">
            <div className='ResulCli' style={{ fontSize: `${fontSize}px` }}>
        <div className="button-container">
          <button onClick={increaseFontSize}>Aumentar Fonte</button>
          <button onClick={decreaseFontSize}>Diminuir Fonte</button>
        </div>
        { cliente.length > 0? <div className="clientes">
        <h1>Clientes Cadastrados</h1>
          {cliente.map((cl) => (
            <div key={cl.idCli} className="info-cli">
            <h3>{cl.nomeCli}</h3>
            <p>CPF: {cl.cpfCli}</p>
            <div className="bt_cli">
              <Link to={`/editar/${cl.idCli}`}>
                <button>Editar Cadastro</button>
              </Link>
              <Link to={`/pedidos/${cl.idCli}`}>
                <button>Visualizar Pedidos</button>
              </Link >
              <Link to={"/CadastroVendas"}>
                <button>Realizar Venda</button>
              </Link>
            </div>
          </div>
          ))}
        </div> : <h1>Nenhum Cliente cadastrado</h1>}
        </div>
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
