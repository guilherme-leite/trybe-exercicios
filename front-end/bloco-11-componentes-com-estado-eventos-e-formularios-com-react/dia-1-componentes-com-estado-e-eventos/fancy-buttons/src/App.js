import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  clickHandler() {
    this.setState((prevState, _props) => ({
      count: prevState.count + 1
    }))
  }

  changeColor(num) {
    return num % 2 === 0 ? 'green' : 'white'
  }

  render() {
    return(
      <button style={{ backgroundColor: this.changeColor(this.state.count)}} onClick={this.clickHandler}>Botão contador: {this.state.count}</button>    
    )
  }
}

export default App;
