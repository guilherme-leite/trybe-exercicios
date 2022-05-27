const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);

  if (!book) res.status(404).json({ message: "Book not found"});

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BookService.create({title, author, pageQuantity});

  res.status(200).json(newBook);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedBook = await BookService.update(id, {title, author, pageQuantity});

  if (!updatedBook) return res.status(404).json({ message: "Book not found"});

  return res.status(200).json({ message: "Book updated"});
};

const remove = async (rec, res) {
  const { id } = req.params;
  const removed = await BookService.remove(id);

  if (!removed) return res.status(404).json({ message: "Book not found"});

  res.status(200).json({ message: 'Book Removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
