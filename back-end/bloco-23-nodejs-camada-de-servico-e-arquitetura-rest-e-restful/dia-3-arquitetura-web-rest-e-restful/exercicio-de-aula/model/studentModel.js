const connection = require('./connection');

const listAllStudents = async () => {
  const [result] = await connection.query('SELECT * FROM students');

  return result;
};

module.exports = {
  listAllStudents,
};
