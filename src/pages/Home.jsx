import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  // Novo estado para guardar a data do input
  const [targetDate, setTargetDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({});

  // 2. Lógica da contagem regressiva agora depende do targetDate
  useEffect(() => {
    // Se não houver data definida, limpa o contador e para
    if (!targetDate) {
      setTimeLeft({});
      return;
    }

    const calculateTimeLeft = () => {
      const difference = +new Date(`${targetDate}T00:00:00`) - +new Date();
      let newTimeLeft = {};

      if (difference > 0) {
        newTimeLeft = {
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    // Atualiza o contador a cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpa o timer quando o componente é desmontado ou a data muda
    return () => clearInterval(timer);
  }, [targetDate]); // Roda o efeito sempre que a data alvo mudar

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

        {/* 3. Input para a data */}
        <div className="date-picker-container">
          <label htmlFor="date-input" className="date-picker-label">
            Data para o nosso próximo abraço:
          </label>
          <input
            type="date"
            id="date-input"
            className="date-picker-input"
            onChange={(e) => setTargetDate(e.target.value)}
          />
        </div>

        {/* 4. Contagem Regressiva Condicional - Só aparece se uma data for escolhida */}
        {targetDate && (
          <div className="countdown-container">
            {Object.keys(timeLeft).length ? (
              <div className="countdown-timer">
                <div className="countdown-item"><span>{timeLeft.dias}</span>dias</div>
                <div className="countdown-item"><span>{timeLeft.horas}</span>horas</div>
                <div className="countdown-item"><span>{timeLeft.minutos}</span>min</div>
                <div className="countdown-item"><span>{timeLeft.segundos}</span>seg</div>
              </div>
            ) : (
              <span className="countdown-finalizado">A espera acabou ou a data já passou! ❤️</span>
            )}
          </div>
        )}

        <div className="home-actions">
          <Link to="/galeria" className="home-button">Ver Nossas Fotos</Link>
          <Link to="/quiz" className="home-button">Testar nossa Sintonia</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;