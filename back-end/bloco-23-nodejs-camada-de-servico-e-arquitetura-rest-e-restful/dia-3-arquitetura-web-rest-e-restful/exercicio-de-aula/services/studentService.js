const studentModel = require('../model/studentModel');

const getStudent = async () => {
  const students = await studentModel.listAllStudents();

  return students;
};

const registerStudent = async (student) => {
  const { name, age, class_id } = student;

  const registredStudent = await studentModel.createStudents(name, age, class_id);

  return registredStudent;
}

module.exports = {
  getStudent,
  registerStudent
};