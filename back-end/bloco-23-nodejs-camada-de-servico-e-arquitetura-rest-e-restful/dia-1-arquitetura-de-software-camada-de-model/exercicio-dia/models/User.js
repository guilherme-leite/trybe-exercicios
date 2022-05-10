const connection = require('./connection');

const serialize = (userData) => ({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
});

const create = ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';

  return connection.execute(query, [firstName, lastName, email, password]).then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
};

module.exports = {
  serialize,
  create
};
