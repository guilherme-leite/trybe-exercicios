module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Products',
			[
				{
					name: 'iPhone',
					description: 'iPhone X novo',

				},
				{
					name: 'Cafeteira',
					description: 'Nescafé',

				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Products', null, {});
	},
};