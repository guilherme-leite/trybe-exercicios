const studentModel = require('../model/studentModel');
const classModel = require('../model/classModel');

const getStudent = async () => {
  const students = await studentModel.listAllStudents();

  return students;
};

const registerStudent = async (student) => {
  const { name, age, class_id } = student;

  const classExits = await classModel.classById(class_id);

  if(!classExits) {
    console.log('Classe não existe!');
  }

  const registredStudent = await studentModel.createStudents(name, age, class_id);

  return registredStudent;
}

module.exports = {
  getStudent,
  registerStudent
};