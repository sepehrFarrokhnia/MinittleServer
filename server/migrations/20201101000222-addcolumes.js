'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('Users','Wins',{
      type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    });
    queryInterface.addColumn('Users','Rank',{
      type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
    queryInterface.addColumn('Users','Loses',{
      type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
