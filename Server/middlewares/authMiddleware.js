const ResponseModel = require('../utilities/responseModel');
const tokenHandler = require('../utilities/tokenHandler');

module.exports = (req, res, next) => {
    if(!req.url.startsWith('/customer/') &&
    !req.url.startsWith('/hospital/') &&
    !req.url.startsWith('/user/')){
        return next();
    }
    let token = req.headers['authorization'];
    token = token ? token.split(' ')[1] : null;
    console.log("Token:", token);

    if(!token){
        console.log("no token")
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