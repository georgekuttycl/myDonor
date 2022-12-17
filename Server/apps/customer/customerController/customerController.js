

//Code of Joyal Johnson

const { Customer, User } = require("../../../data/models")

//for getting all the customers after the registration
module.exports.customersGetAll = async (req, res, next) => {
    let data = await Customer.findAll();
    res.json(data);
}
// for getting the update update page 
module.exports.updateCustomer = async (req, res, next) => {
    Customer.findByPk(req.params.id)
        .then(result => {
            data: result
        });
}
//for updating all the customers by using the id. If customer want to update the registration
module.exports.updatingCustomer = async (req, res, next) => {
    const { name, bloodGroup, phone, address, pin, state, weight, gender, age } = req.body;
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
            where: { id: req.params.id }
        }
    )
}
//for deleting all the customers by using the id. If Customer want to delete the registration
module.exports.deletingCustomer = async (req, res, next) => {
    let id = req.params.id;
    let customer = await Customer.findByPk(id);
    if (customer != null) {
        await Customer.destroy({
            where: {
                id: id
            }
        });
    }
}
