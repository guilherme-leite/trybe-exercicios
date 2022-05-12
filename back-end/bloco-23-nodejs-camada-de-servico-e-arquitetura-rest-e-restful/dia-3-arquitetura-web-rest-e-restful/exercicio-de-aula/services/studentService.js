const studentModel = require('../model/studentModel');

const getStudent = async () => {
  const students = await studentModel.listAllStudents();

  return students;
};

module.exports = {
  getStudent,
};