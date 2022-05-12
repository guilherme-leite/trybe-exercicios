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

module.exports = {
  listStudents,
}