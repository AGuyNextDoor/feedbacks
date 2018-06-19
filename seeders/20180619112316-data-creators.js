'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'creators',
      [
        {
          id: 1,
          name: 'Christophe D.',
          email: 'christophe.delattre@decathlon.com',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 2,
          name: 'Julian B.',
          email: 'julian.boes@decathlon.com',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 3,
          name: 'Martin D.',
          email: 'martin.delorme@decathlon.com',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 4,
          name: 'Martin V.',
          email: 'martin.vielvoye@gmail.com',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 5,
          name: 'Matthieu D.',
          email: 'matthieu.deback@decathlon.com',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('creators', null);
  }
};
