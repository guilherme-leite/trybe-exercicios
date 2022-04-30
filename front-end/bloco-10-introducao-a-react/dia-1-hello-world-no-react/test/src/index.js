import React from 'react';
import ReactDom from 'react-dom';
import './App.css'

function tick() {
  const element = (
    <div className='App'>
      <h1>Hello, world!</h1>
      <h2>It's { new Date().toLocaleTimeString('pt', { hour12: true})}.</h2>
    </div>
  );
  ReactDom.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);