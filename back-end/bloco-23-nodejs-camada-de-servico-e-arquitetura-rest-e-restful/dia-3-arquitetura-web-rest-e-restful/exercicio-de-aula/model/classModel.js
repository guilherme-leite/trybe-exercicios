const connection = require('./connection');

const classById = async (id) => {
  const myClass = await connection.query('SELECT * FROM class WHERE id = ?', [id]);
  console.log('CLASS:', myClass);
  return myClass;
};

module.exports = {
  classById,
};