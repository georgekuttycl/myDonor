const {Feedback,Bloodgroup,Customer,Request,User, Appointment, Hospital} = require('../../../data/models');
const { json } = require("body-parser");
const { QueryTypes, Op } = require('sequelize');
const { formatDate } = require("date-utils-2020");
const ResponseModel = require("../../../utilities/responseModel");

//customer sending feedback
module.exports.feedbackDetails = async(req,res)=>{
    console.log("body of feedback",req.body);
    const {description} = req.body;
    const feedbacks = await Feedback.create({

        description:description,
        date:formatDate(new Date(), "yyyy/MM/dd"),
        userId:req.user.id

    })
}

//customer requesting blood
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
        console.log("here");
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
    const { fullName, bloodGroup, phone, address, pin, state, weight, gender, age,email,password } = req.body;
   const customer =  await Customer.update(
        {
            name: fullName,
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
  const user =  await User.update({
        email:email,
        password:password},

        {where:{id:req.user.id}
    })
    return res.json(new ResponseModel(customer[0], null, []))
}


//customer details on home page
module.exports.customerDetails = async(req,res)=>{
    let customerName = await Customer.findOne({
        where:{
            userId:req.user.id
        }
    })

    let hospitalCount = await User.count({
        where:{
            role:'hospital',
        }
    })

    let customerCount = await User.count({
        where:{
            role:'customer'
        }
    })

    let donationCount = await Appointment.count({
        where:{
            userId:req.user.id,
            status:{
                [Op.or]:["collected","sold"]
            }
        }
    })

    let purchaseNumber = await Request.count({
        where:{
            userId:req.user.id
        }
    })

    let stockCount = await Appointment.count({
        where:{
            status:'collected'
        }
    })

    let purchaseHistory = await Request.findAll({
        where:{
            userId:req.user.id
        },
        include: [
            {
                model: User,
                include: {
                    model: Customer
                }
            },
        ]
    })

    return res.json({
        customerName:customerName,
        hospitalCount:hospitalCount,
        customerCount:customerCount,
        donationCount:donationCount,
        purchaseNumber:purchaseNumber,
        stockCount:stockCount,
        purchaseHistory:purchaseHistory

    })
}
