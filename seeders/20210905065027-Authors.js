'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Authors', [
      {
        id: 1,
        fullName: 'Toan Ho',
        avatar: "https://4.bp.blogspot.com/-LiJZ5I8E7K8/XIe_GeI5glI/AAAAAAAAIuw/4Awu8j8r0P8TKBXzyxyslHEfplOlK9-6QCK4BGAYYCw/s1600/icon%2Bfigma%2Bvector.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('Authors', null, {});

  }
};
