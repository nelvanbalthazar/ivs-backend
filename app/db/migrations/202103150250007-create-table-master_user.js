
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('master_user', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'name',
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'email',
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'password',
    },
   
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  }),

  down: queryInterface => queryInterface.dropTable('master_user'),
};
