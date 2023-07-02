import React, { useState } from 'react';

const ClienteDadds = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');

  const handleUpdate = () => {
    // Aqui você pode implementar a lógica para atualizar os dados do cliente
    console.log('Dados atualizados:', {
      nome,
      cpf,
      telefone,
      logradouro,
      bairro,
      cidade,
      cep
    });
  };

  return (
    <div>
      <h1>Formulário do Cliente</h1>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <br />
      <label>
        CPF:
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </label>
      <br />
      <label>
        Telefone:
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </label>
      <br />
      <label>
        Logradouro:
        <input
          type="text"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        />
      </label>
      <br />
      <label>
        Bairro:
        <input
          type="text"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
      </label>
      <br />
      <label>
        Cidade:
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
      </label>
      <br />
      <label>
        CEP:
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleUpdate}>Atualizar</button>
    </div>
  );
};

export default ClienteDadds;
 





