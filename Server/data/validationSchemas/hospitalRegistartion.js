const { checkSchema, validationResult } = require('express-validator');
module.exports = checkSchema({
    name:{
        isLength: {
            errorMessage: '❌ Name must be more than 2 characters',
            options: {
                min: 2,
                max: 50
            }
        }
    },
    email:{
        isEmail: {
            errorMessage: '❌ Check the email address',
            options: {
                require_tld: true
            }
        }
    },
    phone:{
        isMobilePhone:{
            errorMessage:"❌ check the mobile number"
        }
    },
    licenseNumber:{
        errorMessage:'❌ License number should be more than 8 characters',
        isAlphanumeric:{
            min:8,
            max:16
        }
    },
    password:{
        errorMessage:'❌ Password should be more than 6 characters',
        isLength:{
            min:6
        }
    }
})