'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Cars', 'ModelCarId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'ModelCars',
        key: 'id'
      }
    })
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Cars', 'ModelId')
  }
};
