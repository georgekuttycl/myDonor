const { checkSchema, validationResult } = require('express-validator');

module.exports = checkSchema({
    fullName:{
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
            errorMessage: 'Check the email address',
            options: {
                require_tld: true
            }
        }
    },
    phone:{

        isMobilePhone:{
            errorMessage: 'Check the phone number'
        }
    },
    weight:{
        errorMessage: 'Weight should be less than 150 and more than 50',
        isFloat:{
            options:{
               min:50,
               max:150
            }
        }
    },
    password:{
        errorMessage: 'Password should contain atleast 6 characters',
        isLength:{
            options:{
                min:6
            }
        }
    },
    age:{
        errorMessage: 'Age must be between 18 and 60',
        isFloat:{
            options:{
                min:18,
                max:60
            }
        }
    }
})