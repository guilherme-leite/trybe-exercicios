const { Product } = require('../models');

const create = async (nome) => {
	const newProduct = await Product.create({ nome });

	return newProduct;
};

const getAll = async () => {

	const products = await Product.findAll();

	return products;
};

const remove = async (id) => {

	await Product.destroy({
		where: { id }
	});
	return true;
};

const edit = async (id, name, description) => {

	await Product.update(
		{ id, name, description },
		{ where: { id } }
	);
	return true;
};

module.exports = {
	getAll,
	create,
	remove,
	edit
};