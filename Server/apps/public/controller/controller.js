const {User,Hospital,Customer} = require('../../../data/models');
const { json } = require("body-parser");
const { QueryTypes } = require('sequelize');

module.exports.customerRegistration = async(req,res)=>{

    const {name,bloodGroup,phone,address,pin,state,weight,gender,email,password,role,age } = req.body;
    const user = await User.create({
        email:email,
        password:password,
        role:'customer'
    });
    const customer = await Customer.create({
        name:name,
        bloodGroup:bloodGroup,
        phone:phone,
        address:address,
        pin:pin,
        state:state,
        weight:weight,
        gender:gender,
        age:age,
        userId:user.dataValues.id
    })
//    const user = await User.create({
//         email: req.body.email,
//         password: req.body.password,
//         role: req.body.role,
//     })
//     .then((user) => {
//        console.log(user);
//     });
//    const Customer = await Customer.create({
//         name: req.body.name,
//         bloodGroup: req.body.bloodGroup,
//         phone: req.body.phone,
//         address: req.body.address,
//         pin: req.body.pin,
//         state: req.body.state,
//         weight: req.body.weight,
//         gender: req.body.gender,
//         userId: user.dataValues.id,
//     })
//     .then((result) => {
//       console.log(result)
//     });
};

module.exports.hospitalRegistration = async(req,res)=>{

    const {name,licenseNumber,phone,address,pin,state,email,password,role} = req.body;
    const usertable = await User.create({
        email:email,
        password:password,
        role:'hospital'
    });
    const hospital = await Hospital.create({
        name:name,
        phone:phone,
        address:address,
        pin:pin,
        state:state,
        licenseNumber:licenseNumber,
        category:'govt',
        userId:usertable.dataValues.id
    })

};