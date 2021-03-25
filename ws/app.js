//imports
var express= require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var router = require('./routing/index')
var app = express()
var requestLogger = require('./utilities/requestlogger')
var errorLogger = require('./utilities/errorlogger')

//middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(requestLogger)
app.use(router)
app.use(errorLogger)


//app listening port
app.listen(3001)
console.log('server started on port 3001')

