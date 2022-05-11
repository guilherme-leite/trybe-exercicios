const connection = require('./connection');

const getAll = async () => {
  const [musics] = await connection.execute('SELECT * FROM musics.songs');
  return musics;
}

const createSong = async (name, album) => {
  const newSong = await connection.execute('INSERT INTO musics.songs (name, album) VALUES (?, ?)', [name, album]);

  return newSong;
}

module.exports = {
  getAll,
  createSong,
};
