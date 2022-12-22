// custumer appointment taking
const express = require("express");
const { Appointment, AppointmentGuest, Customer, User } = require("../../../data/models");
const { formatDate } = require("date-utils-2020");
const ResponseModel = require('../../../utilities/responseModel')

// custumer appointment creaetion.

module.exports.customerAppointment = async (req, res) => {
  //fetching the details from appoinment table using sectionid.
  let loggedUser = req.user.id;
  let data = await Appointment.findOne({
    where: { userId: loggedUser },
  });
  const user = await Customer.findOne({
    where:{
      userId: loggedUser
    },
    include: [User]
  });
  console.log(user);
  if (data == null) {
    console.log("if not exixt donante");
      //createGuest();
      // const { name, Bloodgroup, weight, adress, relation } = req.body;
      var result = await Appointment.create({
        name: user.name,
        Bloodgroup: user.Bloodgroup,
        weight: user.weight,
        address: user.adress,
        releation: 'self',
        appointmentId: loggedUser,
        userId: loggedUser,
        date: formatDate(new Date(), "yyyy/MM/dd")
      });
      return res.json(new ResponseModel(result, null));

  } else {
    let previousDate = data.dataValues.date;
    var someDate = new Date();
    someDate.setDate(someDate.getDate() - 45); //number  of days to add, e.x. 15 days
    var dateFormated = someDate.toISOString().substr(0, 10);
    //var todayDate=formatDate(new Date(), "yyyy/MM/dd")
    if (dateFormated <= previousDate) {
      return res.json(new ResponseModel(null, null, ["Please donate after 45 days."]));
    } else {
      console.log("donate");
      // inserting to apppoimnent if it is self.
      var result = await Appointment.create({
        name: user.name,
        Bloodgroup: user.Bloodgroup,
        weight: user.weight,
        address: user.adress,
        releation: 'self',
        appointmentId: loggedUser,
        userId: loggedUser,
        date: formatDate(new Date(), "yyyy/MM/dd")
      });
      return res.json(new ResponseModel(result, null));
    }
  }
};

module.exports.guestAppointment = async (req, res) => {
  //fetching the details from appoinment table using sectionid.
  const {name, address, bloodgroup, weight, relation} = req.body;
  let loggedUser = req.user.id;
  let data = await Appointment.findOne({
    where: {
      userId: loggedUser,
      relation: 'friend'
    },
  });
  const user = await Customer.findOne({
    where:{
      userId: loggedUser
    },
    include: [User]
  });
  console.log(user);
  if (data == null) {
    console.log("if not exist donante");
      //createGuest();
      // const { name, Bloodgroup, weight, adress, relation } = req.body;
      var result = await Appointment.create({
        name: name,
        Bloodgroup: bloodgroup,
        weight: weight,
        address: address,
        releation: 'friend',
        appointmentId: loggedUser,
        userId: loggedUser,
        relation: 'friend',
        date: formatDate(new Date(), "yyyy/MM/dd")
      });
      return res.json(new ResponseModel(result, null));

  } else {
    let previousDate = data.dataValues.date;
    var someDate = new Date();
    someDate.setDate(someDate.getDate() - 45); //number  of days to add, e.x. 15 days
    var dateFormated = someDate.toISOString().substr(0, 10);
    //var todayDate=formatDate(new Date(), "yyyy/MM/dd")
    if (dateFormated <= previousDate && data.dataValues.relation === 'friend') {
      return res.json(new ResponseModel(null, null, ["Please donate after 45 days."]));
    } else {
      console.log("donate");
      // inserting to apppoimnent if it is self.
      var result = await Appointment.create({
        name: name,
        Bloodgroup: bloodgroup,
        weight: weight,
        address: address,
        appointmentId: loggedUser,
        userId: loggedUser,
        relation: 'friend',
        date: formatDate(new Date(), "yyyy/MM/dd")
      });
      return res.json(new ResponseModel(result, null));
    }
  }
};
