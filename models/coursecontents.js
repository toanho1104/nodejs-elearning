'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseContents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CourseContents.init({
    title: DataTypes.STRING,
    courseID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CourseContents',
  });
  return CourseContents;
};