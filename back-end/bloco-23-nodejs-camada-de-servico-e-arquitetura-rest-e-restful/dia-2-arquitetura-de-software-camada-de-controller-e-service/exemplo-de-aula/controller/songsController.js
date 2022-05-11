const songsService = require('../services/songsService');

const musicsList = (req, res, _next) => {
  const musics = songsService.getAll();

  return res.status(200).json(musics);
};

module.exports = {
  musicsList,
};
