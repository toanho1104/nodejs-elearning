'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts_Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Accounts_Courses.init({
    courseID: DataTypes.INTEGER,
    accountID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accounts_Courses',
  });
  return Accounts_Courses;
};