const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3001;

app.use(express().json());

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'users_crud',
  password: 'docker',
});

app.get('/char',async (req, res) => {
  try {
    const [result] = await connection.execute('SELECT * FROM users_crud.users');
    return res.status(200).json(result);
  } catch(error) {
    console.log('internal server error', error.message);
    return res.status(520).json({ message: 'error'});
  }
});

app.listen(PORT, console.log(`Ouvindo na porta ${PORT}`));