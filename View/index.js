const router = require("express").Router();
const {registerUser}= require("../Controler/user")
const {userValidation}=require('../Validation/validation')
router.post("/register",userValidation,registerUser);

module.exports = router;