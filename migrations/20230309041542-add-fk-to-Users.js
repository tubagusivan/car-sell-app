'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Users', 'ProfileId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Profiles',
        key: 'id'
      }
    })
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'ProfileId')
  }
};
