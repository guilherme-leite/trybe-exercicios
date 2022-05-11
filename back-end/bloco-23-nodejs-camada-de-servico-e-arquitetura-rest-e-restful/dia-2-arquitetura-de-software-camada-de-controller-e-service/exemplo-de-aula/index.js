const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3001;

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'musics'
});

app.get('/musics',async (req, res) => {

  const [musics] = await connection.execute('SELECT * FROM musics.songs');  

  return res.status(200).json(musics);
});

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(PORT, () => console.log(`Te escuto na ${PORT}`)); 