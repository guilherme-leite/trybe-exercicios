const getStudent = async () => {
  const students = await studentModel.listAllStudents();

  return students;
};

module.exports = {
  getStudent,
};