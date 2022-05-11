const connection = require('./connection');

const getAll = async () => {
  const [musics] = await connection.execute('SELECT * FROM musics.songs');
  return musics;
}

module.exports = {
  getAll,
}