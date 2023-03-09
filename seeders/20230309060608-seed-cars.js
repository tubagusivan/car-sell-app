'use strict';
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/cars.json', 'utf-8'))

    data.forEach((el) => {
      delete el.id
      el.soldDate = new Date('1970-01-01')
      el.createdAt = new Date()
      el.updatedAt = new Date()      
    });

    return queryInterface.bulkInsert('Cars', data)
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {})
  }
};
