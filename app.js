const { urlencoded } = require('body-parser');
const express = require('express')
const mysql = require('mysql2')
const app = express()
const route = require('./server/routes/route')
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config()
app.use(express.static('public'))
app.use(expressLayouts)
app.set('view engine','ejs')
app.use('/', route)

  app.listen(5000, (err) => {
    if(err){
        console.log(err)
    }
    console.log(`Example app listening at http://localhost:5000`)
  })