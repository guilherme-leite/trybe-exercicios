const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'model_example'
});

module.exports = connection;
