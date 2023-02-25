const express =require('express')
const app = express()
const UserRegistration = require('./view/index')
// const{userValidation}=require('./Validation/validation')
const bodyParser = require('body-parser')
const Db = require('./Database/index')
//middle ware 
app.use(bodyParser.json())
app.use('/apiproject', UserRegistration )

app.listen(3000, ()=> {
    console.log("server is runnig");
})