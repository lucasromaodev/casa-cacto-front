// src/components/Contato.js
import React from 'react';
import '../styles/Contato.css'; // Caminho correto para o Contato.css

const Contato = () => {
  return (
    <footer className="footer-contato">
      <div className="footer-content">
        <section className="contato-form">
          <h3>Entre em contato</h3>
          <form>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" placeholder="Seu nome" required />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Seu e-mail" required />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" placeholder="Sua mensagem" required></textarea>

            <button type="submit" className="btn-enviar">Enviar</button>
          </form>
        </section>

        <section className="informacoes">
          <h3>Informações de Contato</h3>
          <ul>
            <li><strong>Endereço:</strong> Rua das Palmeiras, 123 - Centro, Aracaju - SE</li>
            <li><strong>Telefone:</strong> (79) 99999-9999</li>
            <li><strong>E-mail:</strong> contato@casacacto.com.br</li>
          </ul>
        </section>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Casa Cacto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Contato;
