'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products',{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      category_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'categories',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      author:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      publisher:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      stock:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cover:{
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('products');
  }
};
