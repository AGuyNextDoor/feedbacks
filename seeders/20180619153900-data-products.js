'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          id: 10001,
          decathlonid: 8377732,
          name: 'VELO ROUTE TRIBAN 100 GRIS BTWIN',
          url: 'https://www.decathlon.fr/media/837/8377732/big_234ede10-4b00-40de-8431-f1ae71e66aa8.jpg',
          user_id: 10003,
          expiringdate: 'NOW()',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10002,
          decathlonid: 8393116,
          name: 'VELO ROUTE ULTRA 500 AF GF',
          url: 'https://www.decathlon.fr/media/839/8393116/big_cc03700a-091d-40b6-916d-0eddf4a90470.jpg',
          user_id: 10003,
          expiringdate: 'NOW()',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10003,
          decathlonid: 8514879,
          name: 'EASYBREATH',
          url: 'https://www.decathlon.fr/media/851/8514879/big_eb6f068e-5b08-496e-82be-697b6cd83714.jpg',
          user_id: 10004,
          expiringdate: 'NOW()',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
