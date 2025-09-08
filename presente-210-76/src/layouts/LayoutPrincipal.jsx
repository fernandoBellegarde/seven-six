import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import './LayoutPrincipal.css';

function LayoutPrincipal() {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <Menu />
      </header>
      
      <main className="layout-content">
        {/* O <Outlet> é o espaço onde o conteúdo da página atual será inserido */}
        <Outlet />
      </main>
      
      <footer className="layout-footer">
        <p>Feito com todo o meu amor para você ❤️</p>
      </footer>
    </div>
  );
}

export default LayoutPrincipal;
