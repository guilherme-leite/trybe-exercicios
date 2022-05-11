const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3001;

app.use(express.json());

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

app.post('/char', async (req, res) => {
  try {
    const { email, first_name, last_name, password } = req.body;
    
    const [result] = await connection.execute(
      'INSERT INTO users_crud.users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)', [email, first_name, last_name, password]
    );
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Erro ao realizar a operacao');
  }
});

app.delete('/char/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await connection.execute('DELETE FROM users_crud.users WHERE id= ?'
    [id] );

    res.status(200).json({ message: 'Sucesso'});
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: 'Erro ao tentar realizar operacão' });
  } 
});

app.listen(PORT, console.log(`Ouvindo na porta ${PORT}`));