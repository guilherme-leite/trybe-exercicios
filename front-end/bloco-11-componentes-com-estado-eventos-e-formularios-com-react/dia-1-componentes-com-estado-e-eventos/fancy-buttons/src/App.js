import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      valor: 0
    }
    this.increaseValue = this.increaseValue.bind(this);
    this.class = this.class.bind(this);
  }

  increaseValue() {
    this.setState((prevState, _props) => ({
      valor: prevState.valor + 1,
    }))
  }

  class(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const {valor} = this.state;
    return (
      <button style={{ backgroundColor: this.class(valor)}} onClick={ this.increaseValue}>Contador: {this.state.valor}</button>
    );
  }
};

export default App;
