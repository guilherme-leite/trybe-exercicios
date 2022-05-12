const express = require('express');
const studentController = require('../../controller/studentController');

const studentRouter = express.Router();

studentRouter.get('/', studentController.listStudents);
studentRouter.post('/new', studentController.createNewStudent);

module.exports = studentRouter;