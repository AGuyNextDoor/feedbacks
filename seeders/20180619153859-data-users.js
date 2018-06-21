'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 10001,
          name: 'User Christophe',
          mail: 'christophe.delattre@decathlon.com',
          type: 'CUSTOMER',
          token: 'TOKEN_USER_1',
          path_image: 'https://lh6.googleusercontent.com/-Zora9d3wvfo/AAAAAAAAAAI/AAAAAAAABD4/UOBW1wuT1AY/s56-c-k-no/photo.jpg',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10002,
          name: 'User Martin V',
          mail: 'martin.vielvoye@gmail.com',
          type: 'CUSTOMER',
          token: 'TOKEN_USER_2',
          path_image: 'https://ca.slack-edge.com/T0JTRV4UT-UA05EM6PL-63356499fffd-72',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10003,
          name: 'IP Martin',
          mail: 'martin.delorme@decathlon.com',
          type: 'IP',
          token: 'TOKEN_USER_3',
          path_image: '',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10004,
          name: 'IP Julian',
          mail: 'julian.boes@decathlon.com',
          type: 'IP',
          token: 'TOKEN_USER_4',
          path_image: 'https://ca.slack-edge.com/T0JTRV4UT-UA05ETXAN-a99fbfe35e60-72',
          createdAt: 'NOW()',
          updatedAt: 'NOW()',
        },
        {
          id: 10005,
          name: 'Admin Matthieu',
          mail: 'matthieu.deback@decathlon.com',
          type: 'ADMIN',
          token: 'TOKEN_USER_5',
          path_image: 'https://lh3.googleusercontent.com/-kcx-g0oo__4/Wf3pjnmKjDI/AAAAAAAAAQc/Kyw8PrsGLMEMuUBZ6IDolTiZxo5wIEP6QCEwYBhgL/w140-h140-p/14359057_10210386696894895_8564650760751386284_n.jpg',
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
