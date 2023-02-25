const joi =require("joi");
exports.userValidation = joi.object({
   //name: joi.string().trim().min(3).max(25).required().regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/),
    email: joi.string().trim().email().required(),
    password: joi.string().min(8).required()
})