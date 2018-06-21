'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'messages',
      [
        {
          id: 10001,
          feedback_id: 10002,
          user_id: 10001,
          content: 'Bonjour, j\'ai un gros problème sur ma roue avant droite.\\nLorsque je roule ca fait du bruit',
          read: true,
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10002,
          feedback_id: 10002,
          user_id: 10003,
          content: 'Merci pour votre message, pouvez vous préciser ? Merci d\'avance.',
          read: true,
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10003,
          feedback_id: 10002,
          user_id: 10001,
          content: 'Quand je roule dans la boue, le frein frotte',
          read: false,
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10004,
          feedback_id: 10001,
          user_id: 10002,
          content: 'Le message initial du client est ...',
          read: true,
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10005,
          feedback_id: 10001,
          user_id: 10003,
          content: 'Merci pour votre retour',
          read: true,
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('messages', null, {});
  }
};
