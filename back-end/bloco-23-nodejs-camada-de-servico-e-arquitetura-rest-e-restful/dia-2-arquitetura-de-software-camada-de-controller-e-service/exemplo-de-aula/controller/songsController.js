const songsService = require('../services/songsService');

const musicsList = async (req, res, _next) => {
  const musics = await songsService.getAll();

  return res.status(200).json(musics);
};

const newSong = async (req, res) => {
  try {
    const newMusic = await musicService.newSong();
  
    return res.staus(201).json(newMusic);
  } catch (error) {
    console.log('erro ao cadastrar', error.message);
  }
};

module.exports = {
  musicsList,
  newSong
};
