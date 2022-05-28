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

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: { id },
      include: [{ 
        model: Address, as: 'addresses', 
        attributes: { exclude: ['number']},
      }],
    });

    if (!employee) {
      return res.status(404).json({ message: 'Funcionario não encontrado' });
    }

    return res.status(200).json(employee);
  } catch (error) {
    console.log('Erro rota employees/ids', error.message);
    res.status(500).json({ message: 'Internal server error'});
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;