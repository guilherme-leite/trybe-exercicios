const express = require('express');
const app = express();
const PORT = 3001;

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'live_lecture_23_1',
  password: 'docker',
});

app.get('/char', (req, res) => {
  try {
    const result = await connection.execute('SELECT * FROM live_lecture_23_1.characters');
    return res.status(200).json(res);
  } catch(error) {
    console.log('internal server error', error.message);
    return res.status(520).json({ message: 'error'});
  }
});

app.listen(PORT, console.log(`Ouvindo na porta ${PORT}`));