'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'User Christophe',
          mail: 'christophe.delattre@decathlon.com',
          type: 'CUSTOMER',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 2,
          name: 'User Julie',
          mail: 'user.julie@hotmail.fr',
          type: 'CUSTOMER',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 3,
          name: 'IP Martin',
          mail: 'martin.delorme@decathlon.com',
          type: 'IP',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 4,
          name: 'IP Julian',
          mail: 'julian.boes@decathlon.com',
          type: 'IP',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 5,
          name: 'Admin Matthieu',
          mail: 'matthieu.deback@decathlon.com',
          type: 'ADMIN',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
