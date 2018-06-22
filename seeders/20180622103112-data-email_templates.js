'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'email_templates',
      [
        {
          id: 987,
          code: "WELCOME_CUSTOMER",
          subject: "Suite à votre feedback",
          body: "Cher client, <br><br>Pour suivre le traitement de votre feedback, merci de cliquer sur le lien suivant : <a href='http://localhost:3000/discussion/{tokenFeedback}'>Suivre mes échanges</a><br><br>A bientot sur decathlon.fr.",
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 2541,
          code: "IP_FEEDBACK_ARRIVED",
          subject: "Nouveau feedback à traiter",
          body: "Cher IP, un nouveau feedback pour toi",
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('email_templates', null, {});
  }
};
