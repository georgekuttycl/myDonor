const ResponseModel = require('../utilities/responseModel');
const tokenHandler = require('../utilities/tokenHandler');

module.exports = (req, res, next) => {
    if(!req.url.startsWith('/customer')){
        return next();
    }

    let token = req.headers['authorization'];
    token = token ? token.split(' ')[1] : null;
    console.log(token);

    if(!token){
        return res.status(401)
            .json(new ResponseModel(null, null, ['Unauthorized.']));
    }

    try{
        const tokenResult = tokenHandler.verifyToken(token);
        req.user = tokenResult;
        console.log("req.user",req.user);
        return next();
    }
    catch(err){
        console.log(err);
        return res.status(401)
            .json(new ResponseModel(null, null, ['Unauthorized.']));
    }
};