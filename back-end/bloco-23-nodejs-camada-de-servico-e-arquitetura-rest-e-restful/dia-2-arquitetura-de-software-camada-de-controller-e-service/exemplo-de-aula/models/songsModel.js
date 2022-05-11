const connection = require('./connection');

const getAllSongs = async () => {
  const [musics] = await connection.execute('SELECT * FROM musics.songs');
  return musics;
}

const createSong = async (name, album) => {
  const [data] = await connection.execute('INSERT INTO musics.songs (name, album) VALUES (?, ?)', [name, album]);

  const newSong = {
    id: data.insertId,
    name, 
    album
  }

  return newSong;
}

module.exports = {
  getAllSongs,
  createSong,
};
