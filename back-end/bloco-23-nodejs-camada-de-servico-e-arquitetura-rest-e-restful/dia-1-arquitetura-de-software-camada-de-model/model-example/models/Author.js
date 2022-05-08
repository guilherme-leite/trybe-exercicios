const { get } = require('express/lib/request');
const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [id, firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

    return {
      id,
      firstName,
      lastName,
      fullName,
    };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const [author] = await connection.execute('SELECT * FROM model_example.authors WHERE id=?;', [id]);

  if (author.lenght === 0) return null;

  const { firstName, middleName, lastName } = author.map(serialize)[0];

   return getNewAuthor({ id, firstName, middleName, lastName });
};

module.exports = {
  getAll,
  findById,
};