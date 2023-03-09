'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCar.belongsTo(models.Car)
      UserCar.belongsTo(models.User)
    }
  }
  UserCar.init({
    UserId: DataTypes.INTEGER,
    CarId: DataTypes.INTEGER,
    time: DataTypes.DATE,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserCar',
  });
  return UserCar;
};