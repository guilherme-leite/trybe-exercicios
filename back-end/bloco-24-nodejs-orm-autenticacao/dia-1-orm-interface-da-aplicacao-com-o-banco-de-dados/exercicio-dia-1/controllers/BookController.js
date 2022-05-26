const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const id = req.params;
  const book = await BookService.getById(id);

  if (!book) res.status(404).json({ message: "Book not found"});

  res.status(200).json(book);
};

module.exports = {
  getAll,
  getById,
};
