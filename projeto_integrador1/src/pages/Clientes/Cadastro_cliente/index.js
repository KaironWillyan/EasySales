import React, { useState } from 'react';
import { client } from '../../../service/http-common';

const CadastroCliente = () => {
  const [nomeCli, setNomeCli] = useState("");
  const [cpfCli, setCpfCli] = useState("")
  const [bairroCli, setBairroCli] = useState("")
  const [numCli, setNumCli] = useState("")
  const [logradouroCli, setLogradouroCli] = useState("")
  const [cepCli, setCepCli] = useState("")
  const [cidadeCli, setCidadeCli] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [fontSize, setFontSize] = useState(16);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("here");
    if(nomeCli.trim() != "",
      bairroCli.trim() != "",
      cpfCli.trim() != "",
      numCli.trim() != "",
      logradouroCli.trim() != "",
      cepCli.trim() != "",
      cidadeCli.trim() != "",
      email.trim() != "",
      telefone.trim() != ""){
        try {
              const response = await client.post('/cliente', {
                  nomeCli,
                    bairroCli,
                    cpfCli,
                    numCli,
                    logradouroCli,
                    cepCli,
                    cidadeCli,
                    email,
                    telefone
              })
          
        } catch (error) {
      
        }    // Aqui você pode implementar a lógica para enviar os dados do cliente para o servidor
      }
    
    // Limpar o formulário após o envio
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className="containerC" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="cadastro1" style={{ marginTop: '15%', backgroundColor: '#e7e5e5', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="button-container1" style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
          <button onClick={increaseFontSize} style={{ borderRadius: '20px', padding: '10px 20px', background: '#1DB4F2', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Aumentar Fonte
          </button>
          <button onClick={decreaseFontSize} style={{ borderRadius: '20px', padding: '10px 20px', background: '#1DB4F2', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Diminuir Fonte
          </button>
        </div>
        <h1 style={{ textAlign: 'center' }}>Cadastro de Cliente</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Nome:</label>
            <input
              type="text"
              name="nomeCli"
              value={nomeCli}
              onChange={(e)=>setNomeCli(e.target.value)}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>CPF:</label>
            <input
               type="text"
               name="cpfCli"
               value={cpfCli}
               onChange={(e)=>setCpfCli(e.target.value)}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={telefone}
              onChange={(e)=>setTelefone(e.target.value)}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Logradouro:</label>
            <input
             type="text"
             name="logradouroCli"
             value={logradouroCli}
             onChange={(e)=>setLogradouroCli(e.target.value)}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Num:</label>
            <input
              type="text"
              name="numCli"
              value={numCli}
              onChange={(e)=>setNumCli(e.target.value)}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Bairro:</label>
            <input
              type="text"
              name="bairroCli"
              value={bairroCli}
              onChange={(e)=>setBairroCli(e.target.value)}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Cidade:</label>
            <input
               type="text"
               name="cidadeCli"
               value={cidadeCli}
               onChange={(e)=>setCidadeCli(e.target.value)}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>CEP:</label>
            <input
             type="text"
             name="cepCli"
             value={cepCli}
             onChange={(e)=>setCepCli(e.target.value)}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="form-group1" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Email:</label>
            <input
            type="text"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              style={{ borderRadius: '15px', padding: '10px', marginTop: '5px', marginBottom: '7px', width: '90%', backgroundColor: 'rgba(245, 233, 23, 0.502)', border: 'none', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="button-container1" style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
            <button type="submit" style={{ borderRadius: '20px', padding: '10px 20px', background: '#1DB4F2', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;
