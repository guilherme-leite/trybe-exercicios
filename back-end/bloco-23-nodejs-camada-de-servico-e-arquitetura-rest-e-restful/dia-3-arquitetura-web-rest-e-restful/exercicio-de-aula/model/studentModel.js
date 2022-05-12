const connection = require('./connection');

const listAllStudents = async () => {
  const [result] = await connection.query('SELECT * FROM students');

  return result;
};

const createStudents = async (name, age, class_id) => {
  const [result] = await connection.query('INSERT INTO students (name, age, class_id) VALUES (?,?,?)',[name, age, class_id]);

  return newStudent = {
    id: result.insertId,
    name,
    age,
    class_id
  }
};

module.exports = {
  listAllStudents,
  createStudents
};
