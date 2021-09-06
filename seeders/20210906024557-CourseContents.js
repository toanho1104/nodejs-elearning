'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('CourseContents', [
      {
        id: 1,
        title: "Chuẩn bị môi trường",
        courseID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Các khái niệm chính",
        courseID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Các thành phần chính",
        courseID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "Vòng đời component",
        courseID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: "React native navigation",
        courseID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: "Xây dựng dự án thực tế",
        courseID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('CourseContents', null, {});

  }
};
