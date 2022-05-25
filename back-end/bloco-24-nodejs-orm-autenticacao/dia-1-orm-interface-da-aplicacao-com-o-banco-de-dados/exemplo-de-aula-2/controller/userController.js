const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (error) {
    console.log('error userController', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  };
});
