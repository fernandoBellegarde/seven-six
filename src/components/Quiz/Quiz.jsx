import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  },
  {
    pergunta: 'Qual é a parte do seu corpo que eu mais amo? 😍',
    opcoes: ['Seu sorriso', 'Seus olhos', 'Seu cabelo', 'Seu peito'],
    respostaCorreta: 'Seu cabelo',
  },
  {
    pergunta: 'Qual é a minha comida favorita?',
    opcoes: ['Pizza', 'Sushi', 'Churrasco', 'Salada'],
    respostaCorreta: 'Sushi',
  },
  {
    pergunta: 'Onde foi nosso primeiro selinho?',
    opcoes: ['No cinema do parque da cidade', 'Na praça da sua casa', 'No parque do povo', 'No shopping Morumbi'],
    respostaCorreta: 'Na praça da sua casa',
  },
  {
    pergunta: 'Quantos selinhos você acha que já trocamos?',
    opcoes: ['20 MILHÕES', '50 MILHÕES', '76 MILHÕES', 'INFINITOS MILHÕES'],
    respostaCorreta: 'INFINITOS MILHÕES',
  },
  {
    pergunta: 'Quantos selinhos você TEM QUE ESTAR DISPOSTA a me dar na vida?',
    opcoes: ['20 MILHÕES', '50 MILHÕES', '76 MILHÕES', 'INFINITOS MILHÕES'],
    respostaCorreta: 'INFINITOS MILHÕES',
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
      setFeedback('Acertou amor ate que vc me conhece um pouquinho! 🥰');
      setPontuacao(pontuacao + 1);
    } else {
      setFeedback('A resposta era outra.... vc me odeia por acaso? 😢');
    }

    setTimeout(() => {
      const proximaPergunta = perguntaAtual + 1;
      if (proximaPergunta < perguntasDoQuiz.length) {
        setPerguntaAtual(proximaPergunta);
      } else {
        setMostrarResultado(true);
      }
      setOpcaoSelecionada(null);
      setFeedback('');
    }, 1000); // 1 segundo de espera
  };

  const handleRefazerQuiz = () => {
      setPerguntaAtual(0);
      setPontuacao(0);
      setMostrarResultado(false);
      setOpcaoSelecionada(null);
      setFeedback('');
    }

  return (
    <div className="quiz-container">
      {mostrarResultado ? (
        <div className="resultado-final">
          <h2>Quiz Finalizado!</h2>
          <h3>Você acertou {pontuacao} de {perguntasDoQuiz.length} perguntas!</h3>
          <p className="mensagem-final">
           Bom amor fiquei com preguiça de codar um verificador de respostas para ter uma resposta diferente para cada 
           pergunta que vc acertar kkkk, então eu espero no minimo um {perguntasDoQuiz.length + `/` + perguntasDoQuiz.length}. Eu te amo! ❤️
          </p>
          <div className="resultado-actions">
            <button onClick={handleRefazerQuiz} className="resultado-button">
              Refazer Quiz
            </button>
            <Link to="/" className="resultado-button">
              Voltar para Home
            </Link>
          </div>
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
