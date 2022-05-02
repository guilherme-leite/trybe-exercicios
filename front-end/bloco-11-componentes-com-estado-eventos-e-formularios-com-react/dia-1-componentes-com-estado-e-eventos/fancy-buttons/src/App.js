import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      valor: 0
    }
    this.increaseValue = this.increaseValue.bind(this);
  }

  increaseValue() {
    this.setState((prevState, _props) => ({
      valor: prevState.valor + 1,
    }))
  }
  
  render() {
    return (
      <button onClick={ this.increaseValue}>Contador: {this.state.valor}</button>
    );
  }
};

export default App;
