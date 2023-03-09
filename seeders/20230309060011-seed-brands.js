'use strict';
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/brands.json', 'utf-8'))

    data.forEach((el) => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()      
    });

    return queryInterface.bulkInsert('Brands', data)
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Brands', null, {})
  }
};
