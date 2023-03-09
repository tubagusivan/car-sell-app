const express = require('express')
const { Controller } = require('./controllers/controller')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', Controller.home)

app.get('/cars', Controller.cars)

app.get('/add', Controller.addRender)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})