'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Accounts', [
      {
        id: 1,
        email: 'admin@gmail.com',
        password: '$2a$10$.PGyo91NQvSkLNhSPItAAuJtehwgQiCmeJAGpuw079fU.bdr6SYOS',
        fullName: 'Toan Admin',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/138580046_107586521314337_2876985077992838941_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=6BBrjum3KbUAX8zrX5Z&_nc_ht=scontent.fsgn2-6.fna&oh=e63a2c4dd5c3182f58681d5ddf02e455&oe=61575ADB',
        TypeID: 1,
        stastusID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        email: 'user@gmail.com',
        password: '$2a$10$.PGyo91NQvSkLNhSPItAAuJtehwgQiCmeJAGpuw079fU.bdr6SYOS',
        fullName: 'Toan user',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/138580046_107586521314337_2876985077992838941_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=6BBrjum3KbUAX8zrX5Z&_nc_ht=scontent.fsgn2-6.fna&oh=e63a2c4dd5c3182f58681d5ddf02e455&oe=61575ADB',
        TypeID: 2,
        stastusID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        email: 'user3@gmail.com',
        password: '$2a$10$.PGyo91NQvSkLNhSPItAAuJtehwgQiCmeJAGpuw079fU.bdr6SYOS',
        fullName: 'Toan user3',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/138580046_107586521314337_2876985077992838941_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=6BBrjum3KbUAX8zrX5Z&_nc_ht=scontent.fsgn2-6.fna&oh=e63a2c4dd5c3182f58681d5ddf02e455&oe=61575ADB',
        TypeID: 2,
        stastusID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        email: 'user@gmail4.com',
        password: '$2a$10$.PGyo91NQvSkLNhSPItAAuJtehwgQiCmeJAGpuw079fU.bdr6SYOS',
        fullName: 'Toan user4',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/138580046_107586521314337_2876985077992838941_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=6BBrjum3KbUAX8zrX5Z&_nc_ht=scontent.fsgn2-6.fna&oh=e63a2c4dd5c3182f58681d5ddf02e455&oe=61575ADB',
        TypeID: 2,
        stastusID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        email: 'user@gmail5.com',
        password: '$2a$10$.PGyo91NQvSkLNhSPItAAuJtehwgQiCmeJAGpuw079fU.bdr6SYOS',
        fullName: 'Toan user5',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/138580046_107586521314337_2876985077992838941_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=6BBrjum3KbUAX8zrX5Z&_nc_ht=scontent.fsgn2-6.fna&oh=e63a2c4dd5c3182f58681d5ddf02e455&oe=61575ADB',
        TypeID: 2,
        stastusID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        email: 'user@gmail6.com',
        password: '$2a$10$.PGyo91NQvSkLNhSPItAAuJtehwgQiCmeJAGpuw079fU.bdr6SYOS',
        fullName: 'Toan user 6',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/138580046_107586521314337_2876985077992838941_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=6BBrjum3KbUAX8zrX5Z&_nc_ht=scontent.fsgn2-6.fna&oh=e63a2c4dd5c3182f58681d5ddf02e455&oe=61575ADB',
        TypeID: 2,
        stastusID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        email: 'user@gmail7.com',
        password: '$2a$10$.PGyo91NQvSkLNhSPItAAuJtehwgQiCmeJAGpuw079fU.bdr6SYOS',
        fullName: 'Toan user 7',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/138580046_107586521314337_2876985077992838941_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=6BBrjum3KbUAX8zrX5Z&_nc_ht=scontent.fsgn2-6.fna&oh=e63a2c4dd5c3182f58681d5ddf02e455&oe=61575ADB',
        TypeID: 2,
        stastusID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        email: 'user@gmail8.com',
        password: '$2a$10$.PGyo91NQvSkLNhSPItAAuJtehwgQiCmeJAGpuw079fU.bdr6SYOS',
        fullName: 'Toan user 8',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/138580046_107586521314337_2876985077992838941_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=6BBrjum3KbUAX8zrX5Z&_nc_ht=scontent.fsgn2-6.fna&oh=e63a2c4dd5c3182f58681d5ddf02e455&oe=61575ADB',
        TypeID: 2,
        stastusID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Accounts', null, {});

  }
};
