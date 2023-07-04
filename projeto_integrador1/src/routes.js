
 import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Pag_inicial from './pages/Pag_inicial';   
import PesquisaFornecedores from './pages/Fornecedores';
import Vendas from './pages/Vendas';
import Clientes from './pages/Clientes';
import CadastroCliente from './pages/Clientes/Cadastro_cliente';
import ClienteDados from './pages/Clientes/EditarCliente';
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
import VendasEfetuadas from './pages/Relatorio/R_Vendas_Efet';
import ProductList from './pages/Relatorio/Status_Prod';
import Venda from './pages/Vendas/Venda';
import ClientePedidosPage from './pages/Clientes/Pedidos';
import LucrosGerais from './pages/Relatorio/R_Lucro';

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
                <Route path='/VendasEfetuadas' element={<VendasEfetuadas/>} />
                <Route path='/StatusProduto' element={<ProductList/>} />
                <Route path='/LucroGeral' element={<LucrosGerais />} />
                <Route path='/cadastroVendas' element={<CadastroVendas />} />
                <Route path='/venda/:cpf' element={<Venda />} />
                <Route path='/editar/:id' element={<ClienteDados />} />
                <Route path='/pedidos/:id' element={<ClientePedidosPage />} />
                <Route path='/cadastroCliente' element={<CadastroCliente/>} />
                
            </Routes>
        </>
    )  
}

export default App;
 

