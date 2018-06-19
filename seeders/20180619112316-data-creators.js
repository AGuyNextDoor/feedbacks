'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'creators',
      [
        {
          name: 'Christophe D.',
          email: 'christophe.delattre@decathlon.com',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          name: 'Julian B.',
          email: 'julian.boes@decathlon.com',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          name: 'Martin D.',
          email: 'martin.delorme@decathlon.com',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          name: 'Martin V.',
          email: 'martin.vielvoye@gmail.com',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
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
    return queryInterface.bulkDelete('creators', null, {});
  }
};
