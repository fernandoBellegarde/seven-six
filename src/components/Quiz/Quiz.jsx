import React, { useState } from 'react';
import './Quiz.css';

const perguntasDoQuiz = [
  {
    pergunta: 'Onde foi nosso primeiro encontro?',
    opcoes: ['No cinema', 'No parque', 'No shopping', 'Festa da mari'],
    respostaCorreta: 'No shopping',
  },
  {
    pergunta: 'Qual é a sua mania que eu mais AMO? 😉',
    opcoes: ['Você fazendo boquinha pro lado', 'Você falando véi', 'Você chorar igual bebezinha amor da minha vida sempre que algo te abala', 'Você falando que me ama toda hora'],
    respostaCorreta: 'Você fazendo boquinha pro lado',
  },
  {
    pergunta: 'Quando quase foi a nossa data de namoro oficial?',
    opcoes: ['03/06', '04/06', '05/06', '06/06'],
    respostaCorreta: '04/06',
  },
  {
    pergunta: 'Qual foi o primeiro lugar que comemos juntos"?',
    opcoes: ['Baccio', `Applebee's`, 'Madero', 'Milky Moo'],
    respostaCorreta: `Applebee's`,
  }
];

function Quiz() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleRespostaClick = (opcao) => {
    setOpcaoSelecionada(opcao);
    if (opcao === perguntasDoQuiz[perguntaAtual].respostaCorreta) {
      setFeedback('Acertou! 🥰');
      setPontuacao(pontuacao + 1);
    } else {
      setFeedback('Quase! A resposta era outra... 😉');
    }

    // Espera um pouco para a pessoa ver o feedback antes de ir para a próxima pergunta
    setTimeout(() => {
      const proximaPergunta = perguntaAtual + 1;
      if (proximaPergunta < perguntasDoQuiz.length) {
        setPerguntaAtual(proximaPergunta);
      } else {
        setMostrarResultado(true);
      }
      setOpcaoSelecionada(null);
      setFeedback('');
    }, 1500); // 1.5 segundos de espera
  };

  return (
    <div className="quiz-container">
      {mostrarResultado ? (
        <div className="resultado-final">
          <h2>Quiz Finalizado!</h2>
          <h3>Você acertou {pontuacao} de {perguntasDoQuiz.length} perguntas!</h3>
          <p className="mensagem-final">
            Mas a verdade é que, acertando tudo ou não, você já ganhou meu coração por completo. Eu te amo! ❤️
          </p>
        </div>
      ) : (
        <>
          <div className="pergunta-secao">
            <div className="pergunta-contador">
              <span>Pergunta {perguntaAtual + 1}</span>/{perguntasDoQuiz.length}
            </div>
            <div className="pergunta-texto">{perguntasDoQuiz[perguntaAtual].pergunta}</div>
          </div>
          <div className="respostas-secao">
            {perguntasDoQuiz[perguntaAtual].opcoes.map((opcao, index) => {
                const isCorrect = opcao === perguntasDoQuiz[perguntaAtual].respostaCorreta;
                const isSelected = opcao === opcaoSelecionada;
                let btnClass = '';
                if(isSelected) {
                    btnClass = isCorrect ? 'correct' : 'incorrect';
                }

              return (
                <button
                    key={index}
                    onClick={() => handleRespostaClick(opcao)}
                    className={`resposta-button ${btnClass}`}
                    disabled={opcaoSelecionada !== null}
                >
                  {opcao}
                </button>
              )
            })}
          </div>
          <div className="feedback-texto">{feedback}</div>
        </>
      )}
    </div>
  );
}

export default Quiz;
