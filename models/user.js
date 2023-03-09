'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Profile)
      User.hasMany(models.UserCar)
    }
  }
  User.init({
    userName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "User Name harus di isi !!"
        },
        notNull : {
          msg : "User Name harus di isi !!"
        } 
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Password harus di isi !!"
        },
        notNull : {
          msg : "Password harus di isi !!"
        } 
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique: true,
      validate : {
        notEmpty : {
          msg : "Email harus di isi !!"
        },
        notNull : {
          msg : "Email harus di isi !!"
        },
        isEmail : {
          msg : "Format email salah"
        }
      }
    },
    role: DataTypes.STRING,
    ProfileId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(instance, options){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password, salt);
        instance.password = hash
        instance.role = "user"
        instance.ProfileId = instance.id
      }
    },
    sequelize,
    modelName: 'User',
  });

  return User;
};