import React from 'react';

function handleClick() {
  console.log('Dale');
};

function handleClick2() {
  console.log('Bom dia');
}

function handleClick3() {
  console.log('Provolone');
}

class App extends React.Component {
  render() {
    return(
      <div>
      <button onClick={handleClick}>Btn1</button>
      <button onClick={handleClick2}>Btn2</button>
      <button onClick={handleClick3}>Btn3</button>
      </div>
    );
  }
};

export default App;
