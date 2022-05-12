const express = require('express');

const studentRouter = require('./students/index');
const classRouter = require('./class/index');

const router = express.Router();

router.use('/students', studentRouter);
router.use('/classes', classRouter);

module.exports = router;