'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ AccountTypes }) {
      this.belongsTo(AccountTypes, {
        foreignKey: 'TypeID'
      })
    }
  };
  Accounts.init({
    email: DataTypes.STRING,
    passWord: DataTypes.STRING,
    fullName: DataTypes.STRING,
    avatar: DataTypes.STRING,
    TypeID: DataTypes.INTEGER,
    stastusID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accounts',
  });
  return Accounts;
};