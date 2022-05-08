const connection = require('./connection');

const serialize = (booksData) => ({
  id: booksData.id,
  title: booksData.title,
  authorId: booksData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('  SELECT * FROM model_example.books;');
  return books.map(serialize);
};

module.exports = {
  getAll,
};
