'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Courses', [
      {
        id: 1,
        name: "React native cơ bản",
        title: "Giúp bạn tìm hiểu rõ hơn về react native",
        poster: "https://isoftglobe.com/wp-content/uploads/2021/02/react-native.png",
        video: "Eb00GjaMv9Q",
        rating: 5,
        numberOfRating: 152100,
        categoriesID: 1,
        authorID: 1,
        createdAt: "2021-07-06 21:08:50",
        updatedAt: "2021-07-06 21:08:50",
      },
      {
        id: 2,
        name: "nodejs cơ bản",
        title: "Xây dựng api đơn giản với nodejs",
        poster: "https://c4.wallpaperflare.com/wallpaper/619/468/16/node-js-javascript-wallpaper-preview.jpg",
        video: "Eb00GjaMv9Q",
        rating: 5,
        numberOfRating: 152100,
        categoriesID: 2,
        authorID: 1,
        createdAt: "2021-07-06 21:08:50",
        updatedAt: "2021-07-06 21:08:50",
      },
      {
        id: 3,
        name: "React native Hook",
        title: "React native lifecycle với cú pháp ngắn hơn",
        poster: "https://reactnativemaster.com/wp-content/uploads/2020/02/React-Native-Hooks-Example-featured.png",
        video: "Eb00GjaMv9Q",
        rating: 4,
        numberOfRating: 152100,
        categoriesID: 1,
        authorID: 1,
        createdAt: "2021-07-06 21:08:50",
        updatedAt: "2021-07-06 21:08:50",
      },
      {
        id: 4,
        name: "React native Lifecycle",
        title: "Vòng đời của một component react native",
        poster: "https://i.ytimg.com/vi/V-54W83djfE/maxresdefault.jpg",
        video: "Eb00GjaMv9Q",
        rating: 4,
        numberOfRating: 152100,
        categoriesID: 1,
        authorID: 1,
        createdAt: "2021-07-06 21:08:50",
        updatedAt: "2021-07-06 21:08:50",
      },
      {
        id: 5,
        name: "ES6",
        title: "Những phần cải tiến của ES6",
        poster: "https://i1.wp.com/hocjavascript.net/wp-content/uploads/2020/11/Tong-quan-ve-JavaScript-ES6.jpg",
        video: "Eb00GjaMv9Q",
        rating: 4,
        numberOfRating: 152100,
        categoriesID: 2,
        authorID: 1,
        createdAt: "2021-07-06 21:08:50",
        updatedAt: "2021-07-06 21:08:50",
      },
      {
        id: 6,
        name: "Tạo hiệu ứng phim với Premiere",
        title: "Premiere cơ bản cho người mới tìm hiểu",
        poster: "https://i.ytimg.com/vi/GIYeAFjAwnU/maxresdefault.jpg",
        video: "Eb00GjaMv9Q",
        rating: 4,
        numberOfRating: 152100,
        categoriesID: 9,
        authorID: 1,
        createdAt: "2021-07-06 21:08:50",
        updatedAt: "2021-07-06 21:08:50",
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Courses', null, {});
  }
};

