import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Para o Amor da Minha Vida 💖</h1>
        <p>
          Bem-vinda ao nosso cantinho especial! Um lugar que criei para celebrar 
          nossas memórias, nossas risadas e nosso amor. Eu espero que cada 
          momento aqui te faça sorrir tanto quanto você me faz sorrir todos os dias.
          Sinto sua falta todos os dias e mal posso esperar para estarmos juntos novamente.
        </p>
        <div className="home-actions">
          <Link to="/galeria" className="home-button">Ver Nossas Fotos</Link>
          <Link to="/quiz" className="home-button">Testar nossa Sintonia</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
