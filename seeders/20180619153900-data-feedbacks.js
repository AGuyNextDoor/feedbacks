'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'feedbacks',
      [
        {
          id: 10001,
          user_id: 10002,
          product_id: 10001,
          topic: 'PROBLEME ROUE',
          token: 'TOKEN_FEEDBACK_1',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10002,
          user_id: 10001,
          product_id: 10001,
          topic: 'PROBLEME CADRE',
          token: 'TOKEN_FEEDBACK_2',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10003,
          user_id: 10001,
          product_id: 10002,
          topic: 'PROBLEME ROUE',
          token: 'TOKEN_FEEDBACK_3',
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
