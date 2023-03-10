'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }
  }
  Profile.init({
    firstName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "firstName harus di isi !!"
        },
        notNull : {
          msg : "firstName harus di isi !!"
        } 
      }
    },
    lastName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Last name harus di isi !!"
        },
        notNull : {
          msg : "Last name harus di isi !!"
        } 
      }
    },
    address: {type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Address harus di isi !!"
        },
        notNull : {
          msg : "Address harus di isi !!"
        } 
      }},
    age: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "age harus di isi !!"
        },
        notNull : {
          msg : "age harus di isi !!"
        } 
      }
    },
    phone: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "phone harus di isi !!"
        },
        notNull : {
          msg : "phone harus di isi !!"
        } 
      }
    },
    photo: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};