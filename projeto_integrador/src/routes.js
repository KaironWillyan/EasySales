<<<<<<< HEAD
=======
/* import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Pag_inicial from './pages/Pag_inicial'   
import PesquisaFornecedores from './pages/Fornecedores'
import Clientes from './pages/Clientes'
import Vendas from './pages/Vendas'
import Relatorio from './pages/Relatorio'
import Cadastro_marca from './pages/Pag_inicial/Cadastro_marca'
import Produtos from './pages/Marcas'
import Cadastro_prod from './pages/Marcas/Cadastro_prod'
import CadastroFornecedor from './pages/Fornecedores/Cadastro_fornecedor'
import CadastroVendas from './pages/Vendas/Cadastro_venda'
import Login from "./pages/Login"
import EditarCliente from "./pages/Clientes/EditarCliente"
import LoginPage from './components/LoginPage';
function RoutesApp(){
    return(
        <BrowserRouter>

            <Header/>
            <Routes>
                <Route path="/" element={ <Pag_inicial/> }/> 
                <Route path="/clientes" element={ <Clientes/> }/> 
                <Route path="/cadastroMarca" element={ <Cadastro_marca/> }/> 
                <Route path='/marca/:id' element={<Produtos/>}/>
                <Route path='/cadastroProduto' element={<Cadastro_prod/>}/>
                <Route path='/fornecedores' element={<PesquisaFornecedores/>}/>
                <Route path='//cadastroFornecedor' element={<CadastroFornecedor/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/vendas' element={<Vendas/>}/>
                <Route path='/cadastroVendas' element={<CadastroVendas/>}/>
                <Route path='/:id/editarCliente' element={<EditarCliente/>}/>
            
            </Routes>
        </BrowserRouter>
    )  
}

export default RoutesApp; 
      

        
 */

>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef

 import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Pag_inicial from './pages/Pag_inicial';   
import PesquisaFornecedores from './pages/Fornecedores';
import Vendas from './pages/Vendas';
import Clientes from './pages/Clientes';
import CadastroCliente from './pages/Clientes/Cadastro_cliente';
<<<<<<< HEAD
import ClienteDados from './pages/Clientes/EditarCliente';
=======
import ClienteDadds from './pages/Clientes/EditarCliente';
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
import Relatorio from './pages/Relatorio';
import Cadastro_marca from './pages/Pag_inicial/Cadastro_marca';
import Produtos from './pages/Marcas';
import Cadastro_prod from './pages/Marcas/Cadastro_prod';
import CadastroFornecedor from './pages/Fornecedores/Cadastro_fornecedor';
import CadastroVendas from './pages/Vendas/Cadastro_venda';
import LoginPage from './pages/LoginPage';
import Cadastroempresa from './pages/LoginPage/CadastroEmpresa';
import VendasPendentes from './pages/Relatorio/R_Vendas_Pend';
import VendasQuitadas from './pages/Relatorio/R_Vendas_Quitadas';
<<<<<<< HEAD
import VendasEfetuadas from './pages/Relatorio/R_Vendas_Efet';
import ProductList from './pages/Relatorio/Status_Prod';
import Venda from './pages/Vendas/Venda';
import ClientePedidosPage from './pages/Clientes/Pedidos';
import LucrosGerais from './pages/Relatorio/R_Lucro';
=======
import Venda from './pages/Vendas/Venda';
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

function RoutesApp(){
    const location = useLocation();
    const isLoginPage = location.pathname === '/';
    const isCadastrarEmpresa = location.pathname === '/cadastroEmpresa';

    return(
        <>
            {!isLoginPage && !isCadastrarEmpresa && <Header />}
            <Routes>
                <Route path="/" element={<LoginPage />} /> 
                <Route path="/cadastroEmpresa" element={ <Cadastroempresa/> }/> 
                <Route path="/PagInicial" element={<Pag_inicial/>}/> 
                <Route path="/clientes" element={<Clientes />} /> 
                <Route path="/cadastroMarca" element={<Cadastro_marca />} /> 
                <Route path='/marca/:id' element={<Produtos />} />
                <Route path='/cadastroProduto' element={<Cadastro_prod />} />
                <Route path='/fornecedores' element={<PesquisaFornecedores />} />
                <Route path='/cadastroFornecedor' element={<CadastroFornecedor />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/vendas' element={<Vendas />} />
                <Route path='/Relatorio' element={<Relatorio />} />
                <Route path='/VendasPendentes' element={<VendasPendentes/>} />
                <Route path='/VendasQuitadas' element={<VendasQuitadas/>} />
<<<<<<< HEAD
                <Route path='/VendasEfetuadas' element={<VendasEfetuadas/>} />
                <Route path='/StatusProduto' element={<ProductList/>} />
                <Route path='/LucroGeral' element={<LucrosGerais />} />
                <Route path='/cadastroVendas' element={<CadastroVendas />} />
                <Route path='/venda/:cpf' element={<Venda />} />
                <Route path='/editar/:id' element={<ClienteDados />} />
                <Route path='/pedidos/:id' element={<ClientePedidosPage />} />
=======
                <Route path='/cadastroVendas' element={<CadastroVendas />} />
                <Route path='/venda/:cpf' element={<Venda />} />
                <Route path='/:id/editarCliente' element={<ClienteDadds />} />
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef
                <Route path='/cadastroCliente' element={<CadastroCliente/>} />
                
            </Routes>
        </>
    )  
}

export default App;
 

