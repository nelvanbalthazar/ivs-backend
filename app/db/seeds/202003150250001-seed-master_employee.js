/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('master_user', [
      {
        email: 'superuser@ivs.com',
        name: 'super_user',
        password: '123456789',
        created_at: now,
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('master_user', null, {}),
};
