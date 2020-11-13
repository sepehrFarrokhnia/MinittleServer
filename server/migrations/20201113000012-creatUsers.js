'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      username:{
        type: Sequelize.STRING
      },
      password:{
        type: Sequelize.STRING
      },
      Role:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "users"
      },
      isActive:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      level:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      levelProgress:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      wins:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      loses:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      friendList:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },
      friendRequests:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
