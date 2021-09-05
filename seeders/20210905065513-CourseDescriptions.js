'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('CourseDescriptions', [
      {
        id: 1,
        content: '<h2>Bạn sẽ học được gì:</h2><section class="index-module_row__-AHgh"><section class="index-module_col__2EQm9 index-module_c-12__u7UXF index-module_m-12__2CxUL index-module_l-12__340Ve"><ul><li style="padding-left: 30px; text-align: justify;">Cách làm đúng đắn trong thực tế (best practice)</li><li style="padding-left: 30px; text-align: justify;">Các thủ thuật, kinh nghiệm xây dựng UI, UX</li><li style="padding-left: 30px; text-align: justify;">Các kỹ năng nâng cao khi xây dựng giao diện web</li><li style="padding-left: 30px; text-align: justify;">Kinh nghiệm, thủ thuật tối ưu ứng dụng Front-end</li></ul></section></section>',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        content: '<h2>Bạn sẽ học được gì:</h2><section class="index-module_row__-AHgh"><section class="index-module_col__2EQm9 index-module_c-12__u7UXF index-module_m-12__2CxUL index-module_l-12__340Ve"><ul><li style="padding-left: 30px; text-align: justify;">Cách làm đúng đắn trong thực tế (best practice)</li><li style="padding-left: 30px; text-align: justify;">Các thủ thuật, kinh nghiệm xây dựng UI, UX</li><li style="padding-left: 30px; text-align: justify;">Các kỹ năng nâng cao khi xây dựng giao diện web</li><li style="padding-left: 30px; text-align: justify;">Kinh nghiệm, thủ thuật tối ưu ứng dụng Front-end</li></ul></section></section>',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        content: '<h2>Bạn sẽ học được gì:</h2><section class="index-module_row__-AHgh"><section class="index-module_col__2EQm9 index-module_c-12__u7UXF index-module_m-12__2CxUL index-module_l-12__340Ve"><ul><li style="padding-left: 30px; text-align: justify;">Cách làm đúng đắn trong thực tế (best practice)</li><li style="padding-left: 30px; text-align: justify;">Các thủ thuật, kinh nghiệm xây dựng UI, UX</li><li style="padding-left: 30px; text-align: justify;">Các kỹ năng nâng cao khi xây dựng giao diện web</li><li style="padding-left: 30px; text-align: justify;">Kinh nghiệm, thủ thuật tối ưu ứng dụng Front-end</li></ul></section></section>',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        content: '<h2>Bạn sẽ học được gì:</h2><section class="index-module_row__-AHgh"><section class="index-module_col__2EQm9 index-module_c-12__u7UXF index-module_m-12__2CxUL index-module_l-12__340Ve"><ul><li style="padding-left: 30px; text-align: justify;">Cách làm đúng đắn trong thực tế (best practice)</li><li style="padding-left: 30px; text-align: justify;">Các thủ thuật, kinh nghiệm xây dựng UI, UX</li><li style="padding-left: 30px; text-align: justify;">Các kỹ năng nâng cao khi xây dựng giao diện web</li><li style="padding-left: 30px; text-align: justify;">Kinh nghiệm, thủ thuật tối ưu ứng dụng Front-end</li></ul></section></section>',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        content: '<h2>Bạn sẽ học được gì:</h2><section class="index-module_row__-AHgh"><section class="index-module_col__2EQm9 index-module_c-12__u7UXF index-module_m-12__2CxUL index-module_l-12__340Ve"><ul><li style="padding-left: 30px; text-align: justify;">Cách làm đúng đắn trong thực tế (best practice)</li><li style="padding-left: 30px; text-align: justify;">Các thủ thuật, kinh nghiệm xây dựng UI, UX</li><li style="padding-left: 30px; text-align: justify;">Các kỹ năng nâng cao khi xây dựng giao diện web</li><li style="padding-left: 30px; text-align: justify;">Kinh nghiệm, thủ thuật tối ưu ứng dụng Front-end</li></ul></section></section>',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        content: '<h2>Bạn sẽ học được gì:</h2><section class="index-module_row__-AHgh"><section class="index-module_col__2EQm9 index-module_c-12__u7UXF index-module_m-12__2CxUL index-module_l-12__340Ve"><ul><li style="padding-left: 30px; text-align: justify;">Cách làm đúng đắn trong thực tế (best practice)</li><li style="padding-left: 30px; text-align: justify;">Các thủ thuật, kinh nghiệm xây dựng UI, UX</li><li style="padding-left: 30px; text-align: justify;">Các kỹ năng nâng cao khi xây dựng giao diện web</li><li style="padding-left: 30px; text-align: justify;">Kinh nghiệm, thủ thuật tối ưu ứng dụng Front-end</li></ul></section></section>',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('CourseDescriptions', null, {});

  }
};
