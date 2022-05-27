const express = require('express');

const BookController = require('./controllers/BookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', BookController.getAll);

app.get('/:id', BookController.getById);

app.post('/books', BookController.create);

app.put('/book/:id', BookController.update);

app.delete('/book/:id', BookController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));