import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para fechar o menu ao clicar em um link (útil no mobile)
  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <nav className="menu-nav">
      <div className="menu-container">
        <div className="menu-logo">
          {/* Adicionado NavLink aqui para consistência e onClick */}
          <NavLink to="/" onClick={fecharMenu}>Nosso Cantinho 💕</NavLink>
        </div>

        {/* Botão Hambúrguer que aparece em telas pequenas (controlado via CSS) */}
        <button
          className={`menu-hamburger ${menuAberto ? 'aberto' : ''}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir ou fechar menu"
          // Adicionado para melhor acessibilidade
          aria-expanded={menuAberto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Adicionamos a classe 'aberto' quando o estado for true */}
        <div className={`menu-links ${menuAberto ? 'aberto' : ''}`}>
          <NavLink to="/" className="menu-link" onClick={fecharMenu}>
            Início
          </NavLink>
          <NavLink to="/galeria" className="menu-link" onClick={fecharMenu}>
            Nossas Fotos
          </NavLink>
          <NavLink to="/quiz" className="menu-link" onClick={fecharMenu}>
            Nosso Quiz
          </NavLink>
          <NavLink to="/musicas" className="menu-link" onClick={fecharMenu}>
            Nossas Músicas
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Menu;