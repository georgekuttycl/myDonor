const {Feedback,Bloodgroup,Customer,Request,User, Appointment} = require('../../../data/models');
const { json } = require("body-parser");
const { QueryTypes } = require('sequelize');
const { formatDate } = require("date-utils-2020");
const ResponseModel = require("../../../utilities/responseModel");

//customer sending feedback(varsha)
module.exports.feedbackDetails = async(req,res)=>{
    console.log("body of feedback",req.body);
    const {description} = req.body;
    const feedbacks = await Feedback.create({

        description:description,
        date:formatDate(new Date(), "yyyy/MM/dd"),
        userId:req.user.id

    })
}

//customer requesting blood(joseph)
module.exports.requestBlood = async (req,res)=>{
    const {quantity, group} = req.body;
    let stocks = await Appointment.findAll({
        where: {
            Bloodgroup: group,
            status: 'collected'
        },
        limit: parseInt(quantity)
    });

    if(stocks.length < parseInt(quantity)){
        return res.json(new ResponseModel(null, null, ["Not enaugh stock"]));
    }

    stocks.every(async stock=>{
        console.log("hereeeeeeee");
        await Appointment.update({
            status: 'sold'
        },
        {
            where: {
                id: stock.id
            }
        })
    });

    let request = await Request.create({
        group: group,
        quantity: quantity,
        date:formatDate(new Date(), "yyyy/MM/dd"),
        userId:req.user.id
    });

    return res.json(new ResponseModel(request, null));
 }


//Code of Joyal Johnson

// const { Customer, User } = require("../../../data/models")

// //for getting all the customers after the registration
// module.exports.customersGetAll = async (req, res, next) => {
//     let data = await Customer.findAll();
//     res.json(data);
// }
// for getting the update update page
// module.exports.updateCustomer = async (req, res, next) => {
//     Customer.findByPk(req.params.id)
//         .then(result => {
//             data: result
//         });
// }

module.exports.getUpdateCustomer= async(req,res)=>{
    let data= await Customer.findOne({
        where:{userId:req.user.id},
        include: {
            model: User,
            attributes:['email', 'password']
        }
    })
    console.log(data);
    res.json(data);
}
//for updating all the customers by using the id. If customer want to update the registration
module.exports.postUpdateCustomer = async (req, res) => {
    console.log("here")
    console.log(req.body)
    const { name, bloodGroup, phone, address, pin, state, weight, gender, age,email,password } = req.body;
    await Customer.update(
        {
            name: name,
            bloodGroup: bloodGroup,
            phone: phone,
            address: address,
            pin: pin,
            state: state,
            weight: weight,
            gender: gender,
            age: age
        },
        {
            where: { userId: req.user.id }
        }
    )
    await User.update({
        email:email,
        password:password},

        {where:{id:req.user.id}
    })
}
//for deleting all the customers by using the id. If Customer want to delete the registration
// module.exports.deletingCustomer = async (req, res, next) => {
//     let id = req.params.id;
//     let customer = await Customer.findByPk(id);
//     if (customer != null) {
//         await Customer.destroy({
//             where: {
//                 id: req.user.id
//             }
//         });
//     }
// }
