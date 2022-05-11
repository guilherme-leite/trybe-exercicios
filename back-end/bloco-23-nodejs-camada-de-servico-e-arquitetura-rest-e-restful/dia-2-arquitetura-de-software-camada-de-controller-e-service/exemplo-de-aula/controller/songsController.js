const songsService = require('../services/songsService');

const musicsList = async (req, res, _next) => {
  const musics = await songsService.getAll();

  return res.status(200).json(musics);
};

module.exports = {
  musicsList,
};
