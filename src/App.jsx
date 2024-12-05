<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

const App = () => (
    <>
        <NavBar />
        <ItemListContainer greeting="Bem-vindo à nossa loja!" />
    </>
);

export default App;
=======
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navbar from './navbar/navbar';
import cevada from './navbar/cevada/cevada';
import Acessórios from "./navbar/acessorios"
import lupulo from './navbar/lupulo/lupulo';
import fermentacao from './navbar/fermentacao/fermentacao';
>>>>>>> f869ab37a6229cfcc588dfb7ecd77908c2731792

function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/cevada' exact component={cevada} />
        <Route path='/cats' component={lupulo} />
        <Route path='/sheeps' component={fermentacao} />
        <Route path='/goats' component={Acessórios} />
      </Switch>
    </Router>
  );
}

export default App;
