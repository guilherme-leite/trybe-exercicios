const studentService = require('../services/studentService');

const listStudents = async (req, res, next) => {
  try {
    const students = await studentService.getStudent();
    res.status(200).json(students);
  } catch (error) {
    console.log('error listStudents', error.message);
    next();
  }
};

const createNewStudent = async (req, res, next) => {
  try {
    const newStudent = await studentService.registerStudent(req.body);
    res.status(200).json(newStudent);
  } catch (error) {
    console.log('error createNewStudent', error.message);
    next(error);
  } 
}

module.exports = {
  listStudents,
  createNewStudent,
}