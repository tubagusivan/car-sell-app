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
    BrandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'BrandId is required!'
        },
        notEmpty: {
          msg: 'BrandId is required!'
        }
      }
    },
    ModelCarId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'ModelCarId is required!'
        },
        notEmpty: {
          msg: 'ModelCarId is required!'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is required!'
        },
        notEmpty: {
          msg: 'Name is required!'
        }
      }
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Year is required!'
        },
        notEmpty: {
          msg: 'Year is required!'
        }
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Color is required!'
        },
        notEmpty: {
          msg: 'Color is required!'
        }
      }
    },
    fuel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Fuel is required!'
        },
        notEmpty: {
          msg: 'Fuel is required!'
        }
      }
    },
    transmission: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Transmission is required!'
        },
        notEmpty: {
          msg: 'Transmission is required!'
        }
      }
    },
    carTax: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Car Tax is required!'
        },
        notEmpty: {
          msg: 'Car Tax is required!'
        }
      }
    },
    kilometer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Kilometer is required!'
        },
        notEmpty: {
          msg: 'Kilometer is required!'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required!'
        },
        notEmpty: {
          msg: 'Description is required!'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Price is required!'
        },
        notEmpty: {
          msg: 'Price is required!'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Status is required!'
        },
        notEmpty: {
          msg: 'Status is required!'
        }
      }
    },
    soldDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Sold Date is required!'
        },
        notEmpty: {
          msg: 'Sold Date is required!'
        }
      }
    },
    photo1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Photo1 is required!'
        },
        notEmpty: {
          msg: 'Photo1 is required!'
        }
      }
    },
    photo2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Photo2 is required!'
        },
        notEmpty: {
          msg: 'Photo2 is required!'
        }
      }
    },
    photo3: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Photo3 is required!'
        },
        notEmpty: {
          msg: 'Photo3 is required!'
        }
      }
    },
    photo4: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Photo4 is required!'
        },
        notEmpty: {
          msg: 'Photo4 is required!'
        }
      }
    },
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