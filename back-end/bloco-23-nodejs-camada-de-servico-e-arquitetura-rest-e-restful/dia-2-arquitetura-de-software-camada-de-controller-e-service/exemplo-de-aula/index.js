const express = require('express');

const songsModel = require('./models/songsModel');

const app = express();
const PORT = 3001;

app.get('/musics',async (req, res) => {
  const musics = await songsModel.getAll();

  return res.status(200).json(musics);
});

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(PORT, () => console.log(`Te escuto na ${PORT}`)); 