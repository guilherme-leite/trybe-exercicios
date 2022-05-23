const Product = (sequelize, DataTypes) => {
	// Trabalhamos com a model com o nome no singular
	// Nosso banco fica resposável por armazenar vários ProdutoS (no plurar)
	// E a model representa uma instancia de produtos.

	const Product = sequelize.define('Product', {
		name: DataTypes.STRING,
		description: DataTypes.STRING
	}, {
		timestamps: false,
	}
	);

	return Product;
};

module.exports = Product;