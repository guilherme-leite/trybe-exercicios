const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}!` });
})

app.get('*', function (req, res){
  res.status(200).json({ message: 'Acho que algo deu errado, caiu no coronga!'});
});

app.listen(3001, () => { 
  console.log('Ouvindo na 3001, exercicio-1');
});