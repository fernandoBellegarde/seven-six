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
          <NavLink to="/" onClick={fecharMenu}>Nosso Cantinho 💕</NavLink>
        </div>

        {/* O menu hambúrguer só aparece em telas pequenas (controlado via CSS) */}
        <button 
          className="menu-hamburger" 
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          {/* As 3 linhas do ícone */}
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Adicionamos a classe 'aberto' quando o estado for true */}
        <div className={menuAberto ? "menu-links aberto" : "menu-links"}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'} onClick={fecharMenu}>
            Início
          </NavLink>
          <NavLink to="/galeria" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'} onClick={fecharMenu}>
            Nossas Fotos
          </NavLink>
          <NavLink to="/quiz" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'} onClick={fecharMenu}>
            Nosso Quiz
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Menu;

