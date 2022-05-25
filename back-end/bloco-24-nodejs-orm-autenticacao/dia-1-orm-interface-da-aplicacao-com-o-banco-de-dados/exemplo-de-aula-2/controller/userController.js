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

router.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email }});

    if(!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (error) {
    console.log('error get /search/:id', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
};
});

router.post('/', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await User.create({ fullName, email });

    return res.status(200).json(newUser);
  } catch (error) {
    console.log('error post /', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  };
});

router.put('/:id', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;

    const [ updatedUser ] = await User.update(
      { fullName, email },
      { where: { id }},
    );
    
    console.log('retorno updatedUser', updatedUser);

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    console.log('error put /:id', error.message);
    res.status(500).json({ message: 'Internal server error.'});
  };
});

module.exports = router;