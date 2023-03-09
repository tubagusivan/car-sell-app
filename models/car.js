'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {

    formatRupiah() {
      return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR' }
      ).format(this.price);
    }

    static associate(models) {
      // define association here
      Car.belongsTo(models.ModelCar)
      Car.hasMany(models.UserCar)
      Car.belongsTo(models.Brand)
    }
  }
  Car.init({
    BrandId: DataTypes.INTEGER,
    ModelCarId: DataTypes.INTEGER,
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

  Car.beforeCreate((el) => {
    el.status = 'on listing'
    el.soldDate = new Date('1970-01-01')
  })
  return Car;
};