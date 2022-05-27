const express = require('express');

const BookController = require('./controllers/BookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', BookController.getAll);

app.get('/:id', BookController.getById);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));