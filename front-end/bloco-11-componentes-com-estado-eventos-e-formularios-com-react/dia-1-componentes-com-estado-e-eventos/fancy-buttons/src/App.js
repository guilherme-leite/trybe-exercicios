import React from 'react';

function handleClick() {
  console.log('Dale');
};

class App extends React.Component {
  render() {
    return(
      <button onClick={handleClick}></button>
    );
  }
};

export default App;
