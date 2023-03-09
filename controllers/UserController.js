const { User } = require('../models/')
const bcrypt = require('bcryptjs')

class UserController{


    static registerForm(req,res){
        res.render('register')
    }

    static postRegister(req,res){
        const { email ,userName, password, role } = req.body
        User.create({ 
            email ,userName, password, role
        })
        .then(() => {
            res.redirect('/login')
        })
    }
    static loginform(req,res){
        const { error } = req.query
        res.render('login', {error})
    }

    static postLogin(req,res){
        const { email , password } = req.body
        User.findOne({
            where: { email } 
        })
        .then(user => {
            if(user) {
                const isValidPassword = bcrypt.compareSync(password, user.password)
                if(isValidPassword){

                    req.session.userId = user.id
                    
                    return res.redirect('/')
                } 
                else {
                    const error = "invalid username/password"
                    res.redirect(`/login?error=${error}`)
                }
            } else {
                const error = "invalid username/password"
                 res.redirect(`/login?error=${error}`)
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getLogout(req, res) {
        req.session.destroy((err) => {
            if(err){
                res.send(err)
            } else {
                res.redirect('/login')
            }
        })
    }
}

module.exports = UserController