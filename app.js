const express = require('express')
const { Controller } = require('./controllers/controller')
const app = express()
const port = 3000

app.get('/', Controller.home)

app.get('/cars', Controller.cars)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})