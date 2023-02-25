const {userValidation}=require('./validationschema')

module.exports.userValidation = async(req, res, next) => {
    const { error } =userValidation.validate(req.body);
    console.log("i ma not a rroror ",error);
    if(error) return res.send({success :false, message : error.message, status:400});
    else {
        next();
    }

}

