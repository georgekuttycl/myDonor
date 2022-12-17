/**done by finu */

const { Hospital, User, feedback } = require('../../../data/models');

/**all hospital list */
module.exports.hospitalGetAll = async (req, res, next) => {
    let data = await Hospital.findAll();
    res.json(data);
}

/**update hospital */
module.exports.updateHospital = async (req, res, next) => {
    Hospital.findByPk(req.params.id)
        .then(result => {
            data: result
        });
}

module.exports.updateHospitalPost = async (req, res, next) => {
    const { name, licenseNumber, phone, address, pin, state} = req.body;
    await Hospital.update(
        {
            name: name,
            phone: phone,
            address: address,
            pin: pin,
            state: state,
            licenseNumber: licenseNumber
        },
        {
            where: {id:req.params.id}
        }
    )
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

    const feed = await feedback.create({
        description: description,
        date: date,
        userId:1
    })

};

/**logout */
// module.exports.logoutHospital = (req, res, next) => {
//     req.session = null;
//     res.redirect("/");
// }