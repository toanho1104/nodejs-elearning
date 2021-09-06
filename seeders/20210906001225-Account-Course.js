'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Accounts_Courses', [
      {
        courseID: 1,
        accountID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseID: 2,
        accountID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Accounts_Courses', null, {});

  }
};
