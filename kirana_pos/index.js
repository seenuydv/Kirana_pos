const express = require ('express') 
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const routes =require('./Routes/route')
app.use('/',routes)






app.listen (5001,()=> {
    console.log("Server is running")
})