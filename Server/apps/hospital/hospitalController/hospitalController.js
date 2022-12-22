/**done by finu */

const { formatDate } = require('date-utils-2020');
const { Hospital, User, Feedback,Request, Payment } = require('../../../data/models');
const ResponseModel = require('../../../utilities/responseModel');


/**update hospital */
module.exports.updateHospital = async (req, res, next) => {
    // console.log(req.user.id)
    let data=await Hospital.findOne({
        where:{userId:req.user.id},
        include: {
            model: User,
            attributes:['email', 'password']
        }
    });
    console.log(data)
    res.json(data);

}

module.exports.updateHospitalPost = async (req, res, next) => {
    const { fullName, licenseNumber, phone, address, pin, state,email,password} = req.body;
    var count = await Hospital.update(
        {
            name: fullName,
            phone: phone,
            address: address,
            pin: pin,
            state: state,
            licenseNumber: licenseNumber
        },
        {
            where: {userId:req.user.id}
        }
    );
    return res.json(new ResponseModel(count[0], null, []))
}

/**delete hospital */
// module.exports.deleteHospital = async(req, res,next) => {
//     let id = req.params.id;
//     let hospital = await Hospital.findByPk(id);

//     if (hospital != null) {
//         await Hospital.destroy({
//             where: {
//                 id: id
//             }
//         });
//     }
// }

/**payment */
// module.exports.myPayment = (req, res, next) => {
//     let id = req.session.userId;
//     payment.findAll({
//         where:
//             { id: passenger_id }
//     })

//         .then(bookings => {
//             res.render('bookingDetails', {
//                 data: bookings
//             });
//         })
// }

/**feedback */
module.exports.feedbackHospital = async(req,res)=>{

    const {description, date} = req.body;

    const feed = await Feedback.create({
        description: description,
        date: date,
        userId:req.user.id
    })

};

/**logout */
// module.exports.logoutHospital = (req, res, next) => {
//     req.session = null;
//     res.redirect("/");
// }

module.exports.hospitalPayment = async(req,res)=>{
    let data=await Request.findOne({
        where: {id:req.user.id},
        order: [ [ 'createdAt', 'DESC' ]],
    });
    console.log(data)
    res.json(data);
}

//payment storage
module.exports.hospitalPaymentStore = async(req,res)=>{
    let data=await Request.findOne({
        where: {userId:req.user.id},
        order: [ [ 'createdAt', 'DESC' ]],
    });;
    console.log("asdfghjkl",data)
    let quantity = data.quantity;
    let amount = quantity * 200;
    let store = await Payment.create({
        amount: amount,
        date:formatDate(new Date(), "yyyy/MM/dd"),
        userId:req.user.id,
        requestId:data.id
    });
    console.log(data)
    res.json(data);
    console.log(store)
    //res.json(store);
}

//hospital invoice
module.exports.hospitalInvoice = async(req,res)=>{
    // let data=await Payment.findOne({
    //     where: {userId:req.user.id},
    //     order: [ [ 'createdAt', 'DESC' ]],
    // });
    // console.log(data)
    // res.json(data);
    let data=await Request.findOne({
        where: {userId:req.user.id},
        order: [ [ 'createdAt', 'DESC' ]],
    });
    console.log(data)
    res.json(data);
}

