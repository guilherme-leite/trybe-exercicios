const express = require('express');

const songsController = require('./controller/songsController');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/musics', songsController.musicsList);

app.post('/musics', async (req, res) => {
  const { name, album } = req.body;

  const newSong = await songsModel.createSong(name, album);

  return res.status(201).json(newSong);
});

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(PORT, () => console.log(`Te escuto na ${PORT}`)); 