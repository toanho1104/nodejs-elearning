'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Courses.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    video: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    numberOfRating: DataTypes.INTEGER,
    categoriesID: DataTypes.INTEGER,
    authorID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};