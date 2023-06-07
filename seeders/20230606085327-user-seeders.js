'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: "Adi Christian",
        role: "admin",
        email: "adichristian610@gmail.com",
        password: await bcrypt.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: "Yohaness Lolu",
        role: "user",
        email: "yohaneslulu@gmail.com",
        password: await bcrypt.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
