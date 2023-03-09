const express = require('express')
const { Controller } = require('./controllers/controller')
const UserController = require('./controllers/UserController')
const app = express()
const session = require('express-session')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'hubla',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, sameSite:true}
}))

app.get('/register',UserController.registerForm)
app.post('/register',UserController.postRegister)
app.get('/login',UserController.loginform)
app.post('/login',UserController.postLogin)
app.get('/logout', UserController.getLogout)


// app.use(
  const login = (req, res, next) => {
    if(!req.session.userId){
      const error = " Silahkan Login Dahulu"
      res.redirect(`/login?error=${error}`)
    }else {
      next()
    }
  }
  // )
  const loginAdmin = (req, res, next) => {
    if(req.session.userId && req.session.role === "admin"){
      const error = " kamu tidak dapat mengkases ini"
      res.redirect(`/login?error=${error}`)
    }else {
      next()
    }
  }
  app.get('/profileForm',login, UserController.addProfile)
  app.post('/profileForm',login, UserController.postProfile)
  app.get('/profile/:id',login,UserController.editProfile)
  app.post('/profile/:id',login,UserController.editProfilePost)
  app.get('/admin', UserController.admin)

  app.get('/deleteUser/:id', UserController.delete)

app.get('/', Controller.home)
app.get('/cars',login, Controller.cars)
// app.get('/buy', Controller.cars)
app.get('/add', Controller.addRender)
app.post('/add', Controller.addHandler)
app.post('/addInspectionHandler/:id', Controller.addInspectionHandler)
app.get('/cars/detail/:id', Controller.detailCar)
app.get('/addInspectionRender/:id', Controller.addInspectionRender)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})