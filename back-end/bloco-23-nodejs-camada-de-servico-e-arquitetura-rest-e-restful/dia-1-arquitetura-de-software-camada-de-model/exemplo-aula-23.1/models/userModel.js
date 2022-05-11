const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'users_crud',
  password: 'docker',
});

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM users_crud.users');

  return rows;
};

module.exports = {
  getAll,
};