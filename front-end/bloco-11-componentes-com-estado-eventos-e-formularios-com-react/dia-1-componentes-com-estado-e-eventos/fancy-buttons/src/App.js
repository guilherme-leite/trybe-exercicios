import React from 'react';

function handleClick() {
  console.log('Dale');
};

class App extends React.Component {
  render() {
    return(
      <button onClick={handleClick}>Btn1</button>
    );
  }
};

export default App;
