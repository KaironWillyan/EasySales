import React, { useState } from 'react';
import { client } from '../../service/http-common';

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


  return (
    <div>
      <br></br>
      <h1>Cadastro de Cliente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nomeCli"
            value={nomeCli}
            onChange={(e)=>setNomeCli(e.target.value)}
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            name="cpfCli"
            value={cpfCli}
            onChange={(e)=>setCpfCli(e.target.value)}
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="text"
            name="telefone"
            value={telefone}
            onChange={(e)=>setTelefone(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          NUM:
          <input
            type="text"
            name="numCli"
            value={numCli}
            onChange={(e)=>setNumCli(e.target.value)}
          />
        </label>
        <br />
        <label>
          Logradouro:
          <input
            type="text"
            name="logradouroCli"
            value={logradouroCli}
            onChange={(e)=>setLogradouroCli(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bairro:
          <input
            type="text"
            name="bairroCli"
            value={bairroCli}
            onChange={(e)=>setBairroCli(e.target.value)}
          />
        </label>
        <br />
        <label>
          Cidade:
          <input
            type="text"
            name="cidadeCli"
            value={cidadeCli}
            onChange={(e)=>setCidadeCli(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          CEP:
          <input
            type="text"
            name="cepCli"
            value={cepCli}
            onChange={(e)=>setCepCli(e.target.value)}
          />
        </label>
        <br />
        <br />
        <br />
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
