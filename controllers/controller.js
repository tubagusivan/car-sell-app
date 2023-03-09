const { Brand, Car, ModelCar, Profile, User, UserCar } = require('../models/index')

class Controller {
    static home (req, res) {
        res.send('home')
    }
    static cars (req, res) {
        res.send('cars')
    }
}

module.exports = {
    Controller
}