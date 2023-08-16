const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const app = express()

app
    .set('port', 3000)
    .use(express.static('public'))
    .set('views', path.join(__dirname, '../views'))
    .set('view engine', ".hbs")
    .engine('.hbs', hbs({ extname: '.hbs' }))
    .use('/', require('../routes/routes'))
module.exports = app;