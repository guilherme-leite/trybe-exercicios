const express = require('express');

const songsController = require('./controller/songsController');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/musics', songsController.musicsList);

app.post('/musics', songsController.newSong);

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(PORT, () => console.log(`Te escuto na ${PORT}`)); 