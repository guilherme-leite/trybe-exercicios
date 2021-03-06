const connection = require('./connection');
const Author = require('./Author');

const serialize = (booksData) => ({
  id: booksData.id,
  title: booksData.title,
  authorId: booksData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');
  return books.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';

  const [books] = await connection.execute(query, [authorId]);

  return books.map(serialize);
};

const isValid = async (title, author_id) => {
  if(!title || typeof title !== 'string' || title.length < 3) return false;
  if(!author_id || typeof author_id !== 'number' || !(await Author.findById(author_id))) return false;

  return true;
};

const create = async (title, author_id) => {
  await connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',[title, author_id]);
};

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create
};
