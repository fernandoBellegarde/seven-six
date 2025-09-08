import React, { useState } from 'react';
import './GaleriaDeFotos.css';
import Afovaga from '../../assets/imgs/Afogava.jpg';
import Amor from '../../assets/imgs/Amor.jpg';
import Casal from '../../assets/imgs/Casal.jpg';
import Esmaga from '../../assets/imgs/Esmaga.jpg';
import Ghibli from '../../assets/imgs/ghibli.jpg';
import inicio from '../../assets/imgs/Inicio.jpg';
import linda from '../../assets/imgs/linda.jpg';
import ptcoitada from '../../assets/imgs/ptcoitada.jpg';
import termino from '../../assets/imgs/Termino.jpg';

const nossasFotos = [
    { imagem: Afovaga, legenda: 'Eu me AFOGAVA, nas suas pernas' },
    { imagem: Amor, legenda: 'Eu queria te beijar para sempre' },
    { imagem: Casal, legenda:  'Eu amo te olhar' },
    { imagem: Esmaga, legenda: 'Uma das nossas melhores fotos, EU AMO TE APERTAR' },
    { imagem: Ghibli, legenda: 'Eu amo voc, eu amo essa foto que o chat fez' },
    { imagem: inicio, legenda: 'Acho que esse foi uma das primeira vezes que a gente saiu junto esse ano' },
    { imagem: linda, legenda: 'SEU ROSTO FICOU UMA FOFURA AQUI EU QUERO E AMAR' },
    { imagem: ptcoitada, legenda: 'Meu sentimentos amor me perdoa, nunca mais vou deixar vc assim. MAS EU AMEI CUIDAR DE VC' },
    { imagem: termino, legenda: 'Essa foto é linda, mas vc terminou comigo esse dia.' },
];

function GaleriaDeFotos() {
  const [fotoAtiva, setFotoAtiva] = useState(null);

  const handleFotoClick = (index) => {
    setFotoAtiva(fotoAtiva === index ? null : index);
  };

  return (
    <div className="galeria-container">
      <h2>Nossos Momentos Especiais</h2>
      <p className="galeria-subtitulo">Toque em uma foto e veja a surpresa, meu amor!</p>
      <div className="galeria-grid">
        {nossasFotos.map((foto, index) => (
          <div 
            key={index} 
            className="foto-card"
            // Adiciona o evento de clique aqui
            onClick={() => handleFotoClick(index)}
          >
            <img src={foto.imagem} alt={foto.legenda} />
            <div 
              // Adiciona a classe 'visivel' SÓ SE a fotoAtiva for esta
              className={`foto-legenda ${fotoAtiva === index ? 'visivel' : ''}`}
            >
              <p>{foto.legenda}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GaleriaDeFotos;

