const songsModel = require('../models/songsModel');

const getAll = () => {
  const musics = songsModel.getAllSongs();

  return musics;
};

const newSong = async (name, album) => {
  if(name === undefined || name.length <= 3) throw { message: 'Não foi possivel cadastrar' };
  
  const newMusic = await songsModel.createSong(name, album);

  return newMusic;
};

module.exports = {
  getAll,
  newSong
};
