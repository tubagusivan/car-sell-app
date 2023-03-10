const { Op } = require('sequelize')
const formatDate = require('../helpers/formatDate')
const { Brand, Car, ModelCar, Profile, User, UserCar } = require('../models/index')
const moment = require('moment')

class Controller {
    static home (req, res) {
        res.render('home')
    }

    static cars (req, res) {
        const userId = req.session.userId
        const { search } = req.query
        let options = {
            include: [ ModelCar ],
            where : {}
        }
        if (search) {
            options.where.name = { [ Op.iLike ] : `%${search}%` }
        }

        let datas = {}
        Car.findAll(options)
        .then((data) => {
            // res.send(data)
            datas.car = data
            return  User.findOne({ 
                where:{
                    id: userId,   
                },
                include:Profile     
        }).then((dataUser)=>{
            datas.user = dataUser
            res.render('cars', { data :datas, formatDate })
        })   
            
        })
        .catch((err) => {
            console.log(err);
            res.send(err)
        })
    }

    static addRender (req, res) {
        Brand.getBrandModelCar()
        .then((data) => {
            // res.send(data)
            res.render('addRender', { data })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static addHandler (req, res) {
        const { BrandId, ModelCarId, name, year, color, fuel, transmission, carTax, kilometer, description, price, status, soldDate, photo1, photo2, photo3, photo4 } = req.body

        Car.create({ BrandId, ModelCarId, name, year, color, fuel, transmission, carTax, kilometer, description, price, status, soldDate, photo1, photo2, photo3, photo4 })
        .then((data) => {
            res.redirect('/cars')
        })
        .catch((err) => {
            if (err.name == 'SequelizeValidationError') {
                let errors = err.errors.map((el) => {
                    return el.message
                })
                res.send(errors)                
            } else {
                res.send(err)
            }
        })
    }

    static detailCar (req, res) {
        const { id } = req.params
        let selectedData;
        Car.findByPk(id, {
            include: [ ModelCar, Brand ]
        })
        .then((data) => {
            // res.send(data)
            selectedData = data
            return User.findAll()
        })
        .then((dataUser) => {
            res.render('detailCar', { data: selectedData, dataUser, moment })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static addInspectionRender (req, res) {
        const { id } = req.params
        res.render('addInspectionRender', { id })
    }

    static addInspectionHandler (req, res) {
        const { id } = req.params
        const UserId = req.session.userId
        const { time, location, description, status } = req.body
        // console.log(UserId, CarId, time, location, description, status);
        // res.send('hello')
        UserCar.create({
            CarId: id,
            UserId,
            time, 
            location, 
            description, 
            status
        })
        .then((data) => {
            // res.send(data)
            res.redirect(`/cars/detail/${id}`)
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static mapView(req, res) {
        const UserId = req.session.userId
        User.findByPk(UserId, {
            include: Profile
        })
        .then((data) => {
            // res.send(data)
            res.render('mapView', { data })
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