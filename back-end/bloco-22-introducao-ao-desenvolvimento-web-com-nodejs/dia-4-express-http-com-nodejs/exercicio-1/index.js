const express = require('express');

const app = express();

app.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong'});
});

app.get('*', function (req, res){
  res.status(200).json({ message: 'Acho que algo deu errado, caiu no coronga!'});
});

app.listen(3001, () => { 
  console.log('Ouvindo na 3001, exercicio-1');
});