'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Cars', 'BrandId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Brands',
        key: 'id'
      }
    })
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Cars', 'BrandId')
  }
};
