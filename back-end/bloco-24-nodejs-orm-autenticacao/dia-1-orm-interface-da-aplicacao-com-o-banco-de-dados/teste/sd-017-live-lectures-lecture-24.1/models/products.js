const Product = (sequelize, DataTypes) => {
	const Product = sequelize.define('Product', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
	},//{
		//timestamp: false,
		//}
	);

	return Product;
};

module.exports = Product;
