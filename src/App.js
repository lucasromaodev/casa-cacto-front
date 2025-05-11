// src/App.js
import React from 'react';
import './App.css';  // Estilo global do app
import Header from './components/Header';
import Acomodações from './components/Acomodações';
import Home from './components/Home';
import Contato from './components/Contato';  // Importando o componente Contato

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Acomodações />
      <Contato /> 
    </div>
  );
};

export default App;
