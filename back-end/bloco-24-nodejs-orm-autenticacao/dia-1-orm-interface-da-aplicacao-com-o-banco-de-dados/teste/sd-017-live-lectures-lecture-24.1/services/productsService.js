const { Product } = require('../models');

const create = async (name, description) => {
	const newProduct = await Product.create({name, description});

	return newProduct;
};

const getAll = async () => {

};

const remove = async () => {

};

const edit = async () => { 

};

module.exports = {
	getAll,
	create,
	remove,
	edit
};