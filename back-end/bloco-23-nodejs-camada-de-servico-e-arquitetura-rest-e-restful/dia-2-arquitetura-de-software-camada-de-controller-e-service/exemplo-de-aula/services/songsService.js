const songsModel = require('../models/songsModel');

const getAll = () => {
  const musics = songsModel.getAllSongs();

  return musics;
};

module.exports = {
  getAll,
};
