'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'feedbacks',
      [
        {
          id: 1,
          user_id: 2,
          product_id: 1,
          topic: 'PROBLEME ROUE',
          token: 'TOKEN_1',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 2,
          user_id: 1,
          product_id: 1,
          topic: 'PROBLEME CADRE',
          token: 'TOKEN_2',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 3,
          user_id: 1,
          product_id: 2,
          topic: 'PROBLEME ROUE',
          token: 'TOKEN_3',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('feedbacks', null, {});
  }
};
