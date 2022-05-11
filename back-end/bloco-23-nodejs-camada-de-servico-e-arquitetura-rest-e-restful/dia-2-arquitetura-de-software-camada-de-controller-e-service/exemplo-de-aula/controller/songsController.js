const songsService = require('../services/songsService');

const musicsList = async (req, res, _next) => {
  const musics = await songsService.getAll();

  return res.status(200).json(musics);
};

const newSong = async (name, album) => {
  if(name === undefined || name.length <= 3) return false;
  
  const newMusic = await songsModel.createSong(name, album);

  return newMusic;
};

module.exports = {
  musicsList,
  newSong
};
