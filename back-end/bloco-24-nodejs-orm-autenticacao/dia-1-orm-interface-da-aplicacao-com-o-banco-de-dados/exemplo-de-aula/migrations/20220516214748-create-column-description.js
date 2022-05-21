module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('Products', 'description', {
			type: Sequelize.STRING,
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('Products', 'description');
	},
};