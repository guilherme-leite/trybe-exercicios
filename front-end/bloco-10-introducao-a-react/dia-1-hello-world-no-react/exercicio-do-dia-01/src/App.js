import './App.css';

const tasks = ['Andar de bike', 'Fazer exercicios de fundamentos', 'Ir a praia', 'Alimentar o Provolone', 'Fazer mais exercicios de fundamentos'];

const task = (value) => {
  return (
    tasks.map((task) => (<li>{task}</li>))
  );
}

function App() {
  return (
    <ol>
      {task('Andar de bike')}
    </ol>
    );
}

export default App;
