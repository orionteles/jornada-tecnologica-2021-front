import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Produtos from './pages/Produtos';
import ProdutosDetalhe from './pages/ProdutosDetalhe';

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Route exact path="/" component={Produtos} />
        <Route exact path="/produtos" component={Produtos} />
        <Route exact path="/produtos/:id" component={ProdutosDetalhe} />
      </BrowserRouter>
    </>
  )
}

export default Rotas