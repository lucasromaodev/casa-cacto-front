import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="custom-header">
      <div className="logo">Casa Cacto</div>

      <nav>
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#acomodacoes" className="nav-link">Acomodações</a>
          <a href="#gastronomia" className="nav-link">Gastronomia</a>
          <a href="#contato" className="nav-link">Contato</a>
          <a href="#reservas" className="btn-reserva">Reservas</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
