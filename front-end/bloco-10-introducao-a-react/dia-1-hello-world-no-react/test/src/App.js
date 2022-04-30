function App() {
  function nomeCompletp (nome, sobrenome) {
    return `${nome} ${sobrenome}`;
  };
  const element = <h1>Hello, {nomeCompletp('Guilherme', 'leite')}</h1>;
  const constainer = <div>{element}</div>
  return (
    
      constainer
    
  );
}

export default App;
