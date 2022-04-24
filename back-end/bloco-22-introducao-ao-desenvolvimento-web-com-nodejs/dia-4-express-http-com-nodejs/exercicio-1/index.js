const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./authMiddleware');

const app = express();
app.use(bodyParser.json());
app.use(authMiddleware);

app.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if( parseInt(age, 10) > 17) {
    return res.status(200).json({ message: `Hello, ${name}!`});
  } else return res.status(401).json({ message: 'Unauthorized'});
});

app.post('/singup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  
  if([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Missing Fields' });
  }

})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade.`});
});

app.get('*', function (req, res){
  res.status(200).json({ message: 'Acho que algo deu errado, caiu no coronga!'});
});

app.listen(3001, () => { 
  console.log('Ouvindo na 3001, exercicio-1');
});