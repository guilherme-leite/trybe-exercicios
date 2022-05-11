const express = require('express');
const app = express();
const PORT = 3001;

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'live_lecture_23_1',
  password: 'docker',
});

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(PORT, console.log(`Ouvindo na porta ${PORT}`));