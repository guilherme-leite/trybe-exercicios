const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares/index');


const app = express();
app.use(bodyParser.json());

app.post('/user', middlewares.createUser);

app.use(middlewares.error);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`TMJ na porta ${PORT}`);
});