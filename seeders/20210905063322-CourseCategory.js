'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('CourseCategories', [
      {
        id: 1,
        name: 'React native',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dc6uWhR6bN-SSaj-p_dRILE7_20Bnf6BgmdQhyjFiYhh0FCIng9K5tIbLluBJGTFgms&usqp=CAU",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Java Scrip',
        imageUrl: "https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'C/C++',
        imageUrl: "https://techviec.com/wp-content/uploads/2018/12/khai-niem-ngon-ngu-lap-trinh-c.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Photoshop',
        imageUrl: "https://static.wikia.nocookie.net/logopedia/images/6/6f/Photoshop_2020.svg/revision/latest/scale-to-width-down/150?cb=20200617010346",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'NodeJS',
        imageUrl: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'SQL',
        imageUrl: "http://sqladvice.com/wp-content/uploads/2017/07/SQL_phuongnguyen.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Figma',
        imageUrl: "https://4.bp.blogspot.com/-LiJZ5I8E7K8/XIe_GeI5glI/AAAAAAAAIuw/4Awu8j8r0P8TKBXzyxyslHEfplOlK9-6QCK4BGAYYCw/s1600/icon%2Bfigma%2Bvector.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Office',
        imageUrl: "https://www.lifewire.com/thmb/s44wq0lgC9yfSN11OCKoTFHG0UY=/1536x1024/filters:fill(auto,1)/office2013logo-da62ef83df5b46d0bc072ceac0b8761e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: 'Premiere',
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/616px-Adobe_Premiere_Pro_CC_icon.svg.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('CourseCategories', null, {});

  }
};
