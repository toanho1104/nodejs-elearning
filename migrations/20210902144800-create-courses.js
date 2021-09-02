'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      numberOfRating: {
        type: Sequelize.INTEGER
      },
      categoriesID: {
        type: Sequelize.INTEGER,
        references: {
          model: "CourseCategories",
          key: "id",
        },
      },
      authorID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Authors",
          key: "id",
        },
      },
      courseDescriptionID: {
        type: Sequelize.INTEGER,
        references: {
          model: "CourseDescriptions",
          key: "id",
        },
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
    await queryInterface.dropTable('Courses');
  }
};