const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'users_crud'
});

module.exports = connection;
