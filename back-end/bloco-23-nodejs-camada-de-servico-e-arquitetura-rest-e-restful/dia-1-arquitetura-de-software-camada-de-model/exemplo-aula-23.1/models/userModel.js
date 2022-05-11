const mysql = require('mysql2/promise');

const connection = msql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'user_crud',
  password: 'docker',
});

