'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      fuel: {
        type: Sequelize.STRING
      },
      transmission: {
        type: Sequelize.STRING
      },
      carTax: {
        type: Sequelize.DATE
      },
      kilometer: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      soldDate: {
        type: Sequelize.DATE
      },
      photo1: {
        type: Sequelize.STRING
      },
      photo2: {
        type: Sequelize.STRING
      },
      photo3: {
        type: Sequelize.STRING
      },
      photo4: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};