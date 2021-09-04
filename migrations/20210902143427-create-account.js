'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      passWord: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      TypeID: {
        type: Sequelize.INTEGER,
        references: {
          model: "AccountTypes",
          key: "id",
        },
      },
      stastusID: {
        type: Sequelize.INTEGER,
        references: {
          model: "AccountStastus",
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
    await queryInterface.dropTable('Accounts');
  }
};