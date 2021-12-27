const express = require('express')
const route =  express.Router()
const app = express()
const userController =  require('../userController/userController.js')
app.set('view engine','ejs')

route.get('/', userController.view)
module.exports = route