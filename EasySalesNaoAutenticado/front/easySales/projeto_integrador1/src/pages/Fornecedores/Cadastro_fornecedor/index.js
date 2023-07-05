import React, { useState } from 'react';
import './cadastroF.css'; // Importe o arquivo CSS correspondente
import { client } from '../../../service/http-common';

const CadastroFornecedor = () => {
  const [nomeFn, setNomeFn] = useState("");
  const [cpfFn, setCpfFn] = useState("")
  const [bairroFn, setBairroFn] = useState("")
  const [numFn, setNumFn] = useState("")
  const [logradouroFn, setLogradouroFn] = useState("")
  const [cepFn, setCepFn] = useState("")
  const [cidadeFn, setCidadeFn] = useState("")
  const [emailFn, setEmailFn] = useState("")
  const [telefoneFn, setTelefoneFn] = useState("")
  const [fontSize, setFontSize] = useState(16);

  const handleSubmit =async (event) => {
    event.preventDefault();

    event.preventDefault();
    console.log("here");
    if(nomeFn.trim() != "",
      bairroFn.trim() != "",
      cpfFn.trim() != "",
      numFn.trim() != "",
      logradouroFn.trim() != "",
      cepFn.trim() != "",
      cidadeFn.trim() != "",
      emailFn.trim() != "",
      telefoneFn.trim() != ""){
        try {
              const response = await client.post('/fornecedor', {
                  nomeFn,
                    bairroFn,
                    cpfFn,
                    numFn,
                    logradouroFn,
                    cepFn,
                    cidadeFn,
                    emailFn,
                    telefoneFn
              })
          
        } catch (error) {
      
        }    // Aqui você pode implementar a lógica para enviar os dados do cliente para o servidor
      }
    

    // Ou exibir uma mensagem de sucesso, etc.
    alert('Fornecedor cadastrado com sucesso!');
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={increaseFontSize}>Aumentar Fonte</button>
        <button onClick={decreaseFontSize}>Diminuir Fonte</button>
      </div>
      <div className="cadastro" style={{ fontSize: `${fontSize}px` }}>
        <h2>Cadastro de Fornecedor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <label htmlFor="nome">Nome:</label> */}
            <input
              type="text"
              name="nomeFn"
              value={nomeFn}
              onChange={(e)=>setNomeFn(e.target.value)}
              required
              placeholder='Nome fornecedor:'
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="nome">Nome:</label> */}
            <input
              type="text"
              name="cpfFn"
              value={cpfFn}
              onChange={(e)=>setCpfFn(e.target.value)}
              required
              placeholder='Cpf fornecedor:'
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              name="emailFn"
              value={emailFn}
              onChange={(e)=>setEmailFn(e.target.value)}
              required
              placeholder='Email:'
            />
          </div>
          <div className="form-group">
           {/*  <label htmlFor="bairro">Bairro:</label> */}
            <input
              type="text"
              name="bairroFn"
              value={bairroFn}
              onChange={(e)=>setBairroFn(e.target.value)}
              required
              placeholder='Bairro:'
            />
          </div>
          <div className="form-group">
           {/*  <label htmlFor="logradouro">Logradouro:</label> */}
            <input
              type="text"
              name="logradouroFn"
              value={logradouroFn}
              onChange={(e)=>setLogradouroFn(e.target.value)}
              required
              placeholder='Logradouro:'
            />
          </div>
          <div className="form-group">
           {/*  <label htmlFor="numFn">Numeero:</label> */}
            <input
              type="text"
              name="numFn"
              value={numFn}
              onChange={(e)=>setNumFn(e.target.value)}
              required
              placeholder='Numero casa:'
            />
          </div>  
          <div className="form-group">
           {/*  <label htmlFor="cep">Endereço:</label> */}
            <input
              type="text"
              name="cepFn"
              value={cepFn}
              onChange={(e)=>setCepFn(e.target.value)}
              required
              placeholder='Cep:'
            />
          </div>  
          <div className="form-group">
           {/*  <label htmlFor="endereco">Endereço:</label> */}
            <input
              type="text"
              name="cidadeFn"
              value={cidadeFn}
              onChange={(e)=>setCidadeFn(e.target.value)}
              required
              placeholder='cidadeFn:'
            />
          </div>  
          <div className="form-group">
            {/* <label htmlFor="telefone">Telefone:</label> */}
            <input
              type="text"
              name="telefoneFn"
              value={telefoneFn}
              onChange={(e)=>setTelefoneFn(e.target.value)}
              required
              placeholder='Telefone:'
            />
          </div>
          <div className="button-container">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroFornecedor;
