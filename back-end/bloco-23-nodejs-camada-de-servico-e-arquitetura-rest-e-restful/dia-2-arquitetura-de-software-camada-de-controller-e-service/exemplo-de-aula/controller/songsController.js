const songsService = require('../services/songsService');

const musicsList = async (req, res, _next) => {
  const musics = await songsService.getAll();

  return res.status(200).json(musics);
};

const newSong = async (req, res) => {
  try {
    const { name, album } = req.body;

    const newMusic = await songsService.newSong(name, album);
  
    return res.status(201).json(newMusic);
  } catch (error) {
    console.log('erro ao cadastrar', error.message);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  musicsList,
  newSong
};
