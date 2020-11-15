'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    Role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "users"
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    levelProgress: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    loses: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    friendList: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    friendRequests: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};