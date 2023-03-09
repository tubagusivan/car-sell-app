const { Op } = require('sequelize')
const { Brand, Car, ModelCar, Profile, User, UserCar } = require('../models/index')

class Controller {
    static home (req, res) {
        res.render('home')
    }

    static cars (req, res) {
        const { search } = req.query
        let options = {
            include: [ ModelCar ],
            where : {}
        }
        if (search) {
            options.where.name = { [ Op.iLike ] : `%${search}%` }
        }
        Car.findAll(options)
        .then((data) => {
            // res.send(data)
            res.render('cars', { data })
        })
        .catch((err) => {
            console.log(err);
            res.send(err)
        })
    }

    static addRender (req, res) {
        Brand.findAll({
            include: ModelCar
        })
        .then((data) => {
            // res.send(data)
            res.render('addRender', { data })
        })
        .catch((err) => {
            console.log(err);
            res.send(err)
        })
    }

    static addHandler (req, res) {
        const { BrandId, ModelCarId, name, year, color, fuel, transmission, carTax, kilometer, description, price, status, soldDate, photo1, photo2, photo3, photo4 } = req.body

        Car.create({ BrandId, ModelCarId, name, year, color, fuel, transmission, carTax, kilometer, description, price, status, soldDate, photo1, photo2, photo3, photo4 })
        .then((data) => {
            // res.send(data)
            res.redirect('/cars')
        })
        .catch((err) => {
            console.log(err);
            res.send(err)
        })
    }
}

module.exports = {
    Controller
}