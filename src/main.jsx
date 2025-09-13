import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutPrincipal from './layouts/LayoutPrincipal.jsx';
import Home from './pages/Home.jsx';
import PaginaGaleria from './pages/PaginaGaleria.jsx';
import PaginaQuiz from './pages/PaginaQuiz.jsx';
import PaginaMusicas from './pages/PaginaMusicas.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPrincipal />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/galeria', element: <PaginaGaleria /> },
      { path: '/quiz', element: <PaginaQuiz /> },
      { path: '/musicas', element: <PaginaMusicas /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);