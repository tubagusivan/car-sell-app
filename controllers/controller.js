const { Brand, Car, ModelCar, Profile, User, UserCar } = require('../models/index')

class Controller {
    static home (req, res) {
        res.send('home')
    }
    static cars (req, res) {
        Car.findAll({
            include: [ ModelCar ]
        })
        .then((data) => {
            res.send(data)
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