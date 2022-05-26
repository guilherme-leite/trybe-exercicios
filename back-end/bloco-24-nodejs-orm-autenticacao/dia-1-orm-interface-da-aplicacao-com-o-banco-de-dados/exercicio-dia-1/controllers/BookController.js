const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const id = req.params;
  const book = await BookService.getById(id);
  res.status(200).json(book);
};

module.exports = {
  getAll,
  getById,
};
