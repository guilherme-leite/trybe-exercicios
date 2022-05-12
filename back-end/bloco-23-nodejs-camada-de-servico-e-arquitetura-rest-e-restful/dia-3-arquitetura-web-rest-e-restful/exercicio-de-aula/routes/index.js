const express = require('express');

const studentRouter = require('./students/index');
const classRouter = require('./class/index');

const router = express.router();

router.use('/student', studentRouter);
router.use('/class', classRouter);

module.exports = router;