import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    console.log('this no constructor', this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('This no handleClick', this);
    console.log('Dale');
  };
  
  handleClick2() {
    console.log('Bom dia');
  };
  
  handleClick3() {
    console.log('Provolone');
  };
  render() {
    return(
      <div>
      <button onClick={this.handleClick}>Btn1</button>
      <button onClick={this.handleClick2}>Btn2</button>
      <button onClick={this.handleClick3}>Btn3</button>
      </div>
    );
  }
};

export default App;
