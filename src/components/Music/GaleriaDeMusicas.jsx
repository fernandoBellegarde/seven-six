import React, { useState } from 'react';
import './PaginaMusicas.css';
import taylorSwiftFoto from '../../assets/imgs/imgsCapaAlbum/taylorCapa.webp';
import taylorLover from '../../assets/imgs/imgsCapaAlbum/taylorswift.webp';
import taylor from '../../assets/imgs/imgsCapaAlbum/taylor.webp';
import miw from '../../assets/imgs/imgsCapaAlbum/miw.jpg';
import cyberhex from '../../assets/imgs/imgsCapaAlbum/Cyberhex.webp';

// --- SUA ESTRUTURA DE DADOS ---
// Adicione o campo 'frase' em cada música
const nossosArtistas = [
  {
    nome: 'Taylor Swift',
    foto: taylor,
    musicas: [
      {
        titulo: 'Lover',
        capa: taylorLover,
        frase: 'You\'re my, my, my, my Lover',
      },
      {
        titulo: 'Cornelia Street',
        capa: taylorLover,
        frase: 'And I hope I never lose you, hope it never ends. I\'d never walk Cornelia Street again',
      },
      {
        titulo: 'You are in Love',
        capa: taylorSwiftFoto,
        frase: 'And you understand now why they lost their minds and fought the wars for love',
      }
    ],
  },
  {
    nome: 'Motionless In White',
    foto: miw,
    musicas: [
      {
        titulo: 'Cyberhex',
        capa: cyberhex,
        frase: 'Cause in this hell, you are my paradise.',
      },
    ],
  },
  // Adicione mais artistas e músicas aqui
];


function GaleriaDeMusicas() {
  const [artistaAberto, setArtistaAberto] = useState(null);

  const toggleArtista = (index) => {
    setArtistaAberto(artistaAberto === index ? null : index);
  };

  return (
    <div className="musicas-container">
      <div className="musicas-header">
        <h1>Nossa Trilha Sonora</h1>
        <p>Cada canção aqui tem um pedaço da nossa história e um verso que me faz pensar em você.</p>
      </div>
      <div className="artistas-lista">
        {nossosArtistas.map((artista, index) => (
          <div key={index} className="artista-container">
            <div className="artista-card" onClick={() => toggleArtista(index)} role="button">
              <img src={artista.foto} alt={`Foto de ${artista.nome}`} className="artista-foto" />
              <div className="artista-info">
                <h3>{artista.nome}</h3>
              </div>
              <span className={`artista-chevron ${artistaAberto === index ? 'aberto' : ''}`}></span>
            </div>
            
            <div className={`musicas-lista ${artistaAberto === index ? 'aberto' : ''}`}>
              <div className="musicas-lista-inner">
                {artista.musicas.map((musica) => (
                  <div key={musica.titulo} className="musica-card">
                    <img src={musica.capa} alt={`Capa de ${musica.titulo}`} className="musica-capa" />
                    <div className="musica-info">
                      <h4 className="musica-titulo">{musica.titulo}</h4>
                      <div className="musica-frase-container">
                        <p className="musica-frase">"{musica.frase}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GaleriaDeMusicas;

