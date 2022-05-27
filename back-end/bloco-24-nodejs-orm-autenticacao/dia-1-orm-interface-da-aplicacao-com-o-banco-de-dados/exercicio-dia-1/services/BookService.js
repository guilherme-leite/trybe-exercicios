const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async () => {
  const { title, author, pageQuantity } = req.body;
  
  const newBook = await Book.create(title, author, pageQuantity);
  return newBook;
};

module.exports = {
  getAll,
  getById,
  create,
};
