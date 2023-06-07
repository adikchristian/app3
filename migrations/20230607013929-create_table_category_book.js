'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at:{
        type: Sequelize.DATE,
        allowNull: true,
      }  
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
