const Users =require('../Model/user')
registerUser = async(req, res)=>{

try{    
const {email, name, password}= req.body;
console.log("Controller run ",req.body);
const resultAPI = await fetch("https://jsonplaceholder.typicode.com/users");
const mainData = await resultAPI.json()
// console.log("resultAPI ",mainData);

const resonseData={
    email:email,
    name:name,
    password:password,
    APIdata:mainData
}
res.send(resonseData)
}catch(err){
    console.log("err",err)
}
}
loginUsers = async () =>{
    try{
const {email,password}= req.body;
const findUser = await Users.find({email:email});
console.log("findUser",findUser)
    }catch(err){
        console.log("Login Error",err)
    }
}
module.exports= {
    registerUser,
    loginUsers
}