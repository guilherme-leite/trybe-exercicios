import './App.css';

const task = (value) => {
  return (
    <li>{ value }</li>
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
