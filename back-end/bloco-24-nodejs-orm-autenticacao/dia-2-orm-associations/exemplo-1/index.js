const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (error) {
    console.log('erro rota /employees', error.message);
    res.status(500).json({ message: 'Internal server error'});
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;