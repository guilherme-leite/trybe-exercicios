const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Books = require('./models/Books');
const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({message: 'Author not found'}); 

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  console.log(req.body);

  if(!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos' });

  await Author.create(first_name, middle_name, last_name);

  res.status(200).json({ message: 'New Author created' });
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if(!await Books.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Books.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getByAuthorId(id);
  res.status(200).json(book);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
