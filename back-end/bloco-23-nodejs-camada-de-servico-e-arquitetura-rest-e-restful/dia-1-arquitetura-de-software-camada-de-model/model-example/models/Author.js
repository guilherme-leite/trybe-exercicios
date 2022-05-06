const connection = require('./connection');

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name, FROM model_example.authors',
  );
  return authors;
};

module.exoports = {
  getAll,
};