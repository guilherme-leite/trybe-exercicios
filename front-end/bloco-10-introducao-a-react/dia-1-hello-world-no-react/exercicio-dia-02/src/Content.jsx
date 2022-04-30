import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const content = (param) => conteudos.map((conteudo) => {
  return(
    <div key={conteudo.conteudo} className='card'>
    <h4>{`O conteúdo é: ${conteudo.conteudo}`}</h4>
    <p>{`Status: ${conteudo.status}`}</p>
    <p>{`Bloco: ${conteudo.bloco}`}</p>
  </div>
  );
}); 

class Content extends React.Component {
  render() {
    return(
      <span>
        { content(conteudos) }
      </span>
    );
  }
}

export default Content;