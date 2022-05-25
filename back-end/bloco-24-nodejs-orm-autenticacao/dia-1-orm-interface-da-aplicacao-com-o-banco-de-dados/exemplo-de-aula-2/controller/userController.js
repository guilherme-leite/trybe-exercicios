const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado'});

    return res.status(200).json(user);
  } catch (error) {
    console.log('error userController', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  };
});

module.exports = router;