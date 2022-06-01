const express = require('express');
const Sequelize = require('sequelize');

const config = require('./config/config');

const bodyParser = require('body-parser');
const { Address, Employee, Book, User } = require('./models');

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize(config.development);

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
    });

    if (!employee) {
      return res.status(404).json({ message: 'Funcionario não encontrado' });
    }

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (error) {
    console.log('Erro rota employees/ids', error.message);
    res.status(500).json({ message: 'Internal server error'});
  };
});

app.post('/employees', async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({ firstName, lastName, age }, { transaction: t });
      
      await Address.create({ city, street, number, employeeId: employee.id }, { transaction: t });


      return res.status(201).json({ message: 'Cadastrado com sucesso' });
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    };

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal server error' });
  };

  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;