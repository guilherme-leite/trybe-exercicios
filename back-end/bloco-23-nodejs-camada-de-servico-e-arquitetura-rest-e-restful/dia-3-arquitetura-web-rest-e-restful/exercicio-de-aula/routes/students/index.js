const express = require('express');
const studentRouter = express.Router();
const studentController = require('../../controller/studentController');

studentRouter.get('/', studentController);

module.exports = studentRouter;