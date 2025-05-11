import React from 'react';
import '../styles/Home.css';
import casaCactoImg from '../images/casacacto.jpg'; // Importando a imagem

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={casaCactoImg} alt="Casa Cacto" className="home-image" />
      </div>
      <h1>Bem-vindo à Casa Cacto!</h1>
      <p>Experiência única em um ambiente natural e acolhedor.</p>
    </div>
  );
};

export default Home;
