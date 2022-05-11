const songsModel = require('../models/songsModel');

const getAll = async () => {
  const musics = await songsModel.getAllSongs();

  return musics;
};

module.exports = {
  getAll,
};
