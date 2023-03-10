const express = require('express')
const { Controller } = require('./controllers/controller')
const UserController = require('./controllers/UserController')
const app = express()
const session = require('express-session')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'));

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
  app.get('/profile',login, UserController.addProfile)
  app.post('/profile', UserController.postProfile)
  app.get('/profile/detail/:id', UserController.profileDetail)

app.get('/', Controller.home)
app.get('/cars',login, Controller.cars)
app.get('/mapView', Controller.mapView)
app.get('/add', Controller.addRender)
app.post('/add', Controller.addHandler)
app.post('/addInspectionHandler/:id', Controller.addInspectionHandler)
app.get('/cars/detail/:id', Controller.detailCar)
app.get('/addInspectionRender/:id', Controller.addInspectionRender)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})