import React, { useState } from 'react';

const CadastroEmpresa = () => {
  const [nomeDono, setNomeDono] = useState('');
  const [email, setEmail] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroSenha, setErroSenha] = useState(false);

  const handleCadastro = (event) => {
    event.preventDefault();

    if (!nomeDono || !email || !cpfCnpj || !senha || !confirmarSenha) {
      alert('Informações incompletas. Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErroSenha(true);
      return;
    }

    setErroSenha(false);

    // Lógica para enviar os dados do cadastro para o servidor

    alert('Cadastro realizado com sucesso!');
    // Lógica adicional, como redirecionar para outra página
  };

  return (
    <div>
      <h2>Cadastro de Empresa</h2>
      <form onSubmit={handleCadastro}>
        <div>
          <label>Nome do Dono:</label>
          <input
            type="text"
            value={nomeDono}
            onChange={(event) => setNomeDono(event.target.value)}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>CPF ou CNPJ:</label>
          <input
            type="text"
            value={cpfCnpj}
            onChange={(event) => setCpfCnpj(event.target.value)}
          />
        </div>
        <div>
          <label>Senha de Acesso:</label>
          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>
        <div>
          <label>Confirmar Senha:</label>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(event) => setConfirmarSenha(event.target.value)}
          />
        </div>
        {erroSenha && <p className="erro">As senhas não correspondem. Por favor, tente novamente.</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroEmpresa;
