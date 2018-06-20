'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'messages',
      [
        {
          id: 1,
          feedback_id: 2,
          user_id: 1,
          content: 'Bonjour, j\'ai un gros problème sur ma roue avant droite.\\nLorsque je roule ca fait du bruit',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 2,
          feedback_id: 2,
          user_id: 3,
          content: 'Merci pour votre message, pouvez vous préciser ? Merci d\'avance.',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 3,
          feedback_id: 2,
          user_id: 1,
          content: 'Quand je roule dans la boue, le frein frotte',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 4,
          feedback_id: 1,
          user_id: 2,
          content: 'Le message initial du client est ...',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 5,
          feedback_id: 1,
          user_id: 3,
          content: 'Merci pour votre retour',
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
