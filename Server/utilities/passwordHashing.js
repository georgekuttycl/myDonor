const bcrypt = require("bcrypt")
const saltRounds = 10

class PasswordHasher{
    hashPassword(password){
        var saltRounds = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, saltRounds)
    }

    checkPassword(password, hash){
        return bcrypt.compareSync(password, hash);
    }
}

module.exports.PasswordHasher = PasswordHasher;