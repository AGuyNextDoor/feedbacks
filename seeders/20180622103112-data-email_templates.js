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
          body: "Cher client, <br><br>Pour suivre le traitement de votre feedback, merci de cliquer sur le lien suivant : <a href='{urlEmailCustomer}{tokenFeedback}'>Suivre mes échanges</a><br><br>A bientot sur decathlon.fr.",
          created_at: 'NOW()',
          updated_at: 'NOW()',
        },
        {
          id: 2541,
          code: "IP_NEW_FEEDBACK",
          subject: "Nouveau feedback à traiter",
          body: "Cher IP, un nouveau feedback pour toi",
          created_at: 'NOW()',
          updated_at: 'NOW()',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('email_templates', null, {});
  }
};
