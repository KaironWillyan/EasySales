/* // LoginPage.js

import React, { useState } from 'react';

function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar a lógica de autenticação aqui (chamada à API, validação, etc.)
    // Redirecionar o usuário para a página desejada se a autenticação for bem-sucedida
    // Exibir mensagem de erro em caso de falha na autenticação
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
 */

/* import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica de autenticação com o email e senha
    // Pode ser uma chamada à API ou qualquer outra forma de autenticação

    console.log('Email:', email);
    console.log('Password:', password);

    // Redirecionar para a página principal após o login bem-sucedido
    // Pode ser feito usando o hook useHistory do react-router-dom
    // history.push('/pagina-principal');
  };

  const handleSignUp = () => {
    // Aqui você pode redirecionar para a página de cadastro
    // Pode ser feito usando o hook useHistory do react-router-dom
    // history.push('/cadastro');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <button onClick={handleSignUp}>Cadastrar</button>
    </div>
  );
}

export default LoginPage;
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from "../Img/Eassy.png"
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Fazer a requisição à API para autenticar o email e a senha
    // Exemplo fictício de requisição usando fetch:
    fetch('sua-api.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        // Verificar se a autenticação foi bem-sucedida
        if (data.authenticated) {
          // Redirecionar para a página inicial após o login bem-sucedido
          navigate('/');
        } else {
          console.log('Email ou senha incorretos');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSignUp = () => {
    // Redirecionar para a página de cadastro
    navigate('/cadastroEmpresa');
  };

  return (
    <div className="container">
      <img src={logo}></img>
      <div className="cadastro">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="button-container">
            <button type="submit">Entrar</button>
          </div>
        </form>
        <div className="button-container">
          <button onClick={handleSignUp}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;





/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyId, setCompanyId] = useState(null); // Estado para armazenar o id da empresa
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Fazer a requisição à API para autenticar o email e a senha
    // Exemplo fictício de requisição usando fetch:
    fetch('sua-api.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        // Verificar se a autenticação foi bem-sucedida
        if (data.authenticated) {
          setCompanyId(data.companyId); // Armazenar o id da empresa retornado pela API
          // Redirecionar para a página inicial da empresa após o login bem-sucedido
          navigate(`/${data.companyId}`);
        } else {
          console.log('Email ou senha incorretos');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSignUp = () => {
    // Redirecionar para a página de cadastro
    navigate('/cadastroEmpresa');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <button onClick={handleSignUp}>Cadastrar</button>
    </div>
  );
}

export default LoginPage;
 */
