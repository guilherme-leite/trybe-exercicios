import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliquesB1: 0,
      numeroDeCliquesB2: 0,
      numeroDeCliquesB3: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

  }

  handleClick() {
    this.setState((prevState, _props) => ({
      numeroDeCliquesB1: prevState.numeroDeCliquesB1 + 1
    }))
  };
  
  handleClick2() {
    this.setState((prevState, _props) => ({
      numeroDeCliquesB2: prevState.numeroDeCliquesB2 + 1
    }))
  };
  
  handleClick3() {
    this.setState((prevState, _props) => ({
      numeroDeCliquesB3: prevState.numeroDeCliquesB3 + 1
    }));
  };

  render() {
    return(
      <div>
      <button onClick={this.handleClick}>Botão 1 {this.state.numeroDeCliquesB1}</button>
      <button onClick={this.handleClick2}>Botão 2 {this.state.numeroDeCliquesB2}</button>
      <button onClick={this.handleClick3}>Botão 3 {this.state.numeroDeCliquesB3}</button>
      </div>
    );
  }
};

export default App;
