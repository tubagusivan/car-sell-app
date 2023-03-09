const { Brand, Car, ModelCar, Profile, User, UserCar } = require('../models/index')

class Controller {
    static home (req, res) {
        res.render('home')
    }

    static cars (req, res) {
        Car.findAll({
            include: [ ModelCar ]
        })
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
            res.send(data)
            // res.render('addRender', { data })
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