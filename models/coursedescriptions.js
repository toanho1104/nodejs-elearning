'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseDescriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CourseDescriptions.init({
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CourseDescriptions',
  });
  return CourseDescriptions;
};