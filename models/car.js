'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.ModelCar)
      Car.hasMany(models.UserCar)
    }
  }
  Car.init({
    ModelId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    color: DataTypes.STRING,
    fuel: DataTypes.STRING,
    transmission: DataTypes.STRING,
    carTax: DataTypes.DATE,
    kilometer: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    soldDate: DataTypes.DATE,
    photo1: DataTypes.STRING,
    photo2: DataTypes.STRING,
    photo3: DataTypes.STRING,
    photo4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};