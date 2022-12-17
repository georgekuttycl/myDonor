// custumer appointment taking
const express = require("express");
const { Appointment, AppointmentGuest } = require("../../../data/models");
const { formatDate } = require("date-utils-2020");

// custumer appointment creaetion.

module.exports.customerAppointment = async (req, res) => {
  //fetching the details from appoinment table using sectionid.
  console.log(req.user);
  const { forWho } = req.body;
  let loggedUser = req.user.id;
  let data = await Appointment.findOne({
    where: { userId: loggedUser },
  });
  if (data == null) {
    console.log("if not exixt donante");
    if (forWho != "self") {
      //createGuest();
      const { name, Bloodgroup, weight, adress, releation } = req.body;
      await AppointmentGuest.create({
        name: name,
        Bloodgroup: Bloodgroup,
        weight: weight,
        adress: adress,
        releation: releation,
        appointmentId: loggedUser,
      });
      return;
    }

    //createSelf();
    await Appointment.create({
      date: formatDate(new Date(), "yyyy/MM/dd"),
      forWho: forWho,
      userId: loggedUser,
    });
  } else {
    let previousDate = data.dataValues.date;
    console.log(typeof previousDate);
    console.log("date from table previous", previousDate);
    var someDate = new Date();
    someDate.setDate(someDate.getDate() - 45); //number  of days to add, e.x. 15 days
    var dateFormated = someDate.toISOString().substr(0, 10);
    console.log(dateFormated);
    console.log(typeof dateFormated);
    //var todayDate=formatDate(new Date(), "yyyy/MM/dd")
    if (dateFormated <= previousDate) {
      console.log("no doanation");
    } else {
      console.log("donate");

      // inserting to apppoimnent if it is self.
      //createSelf();
      await Appointment.create({
        date: formatDate(new Date(), "yyyy/MM/dd"),
        forWho: forWho,
        userId: loggedUser,
      });
    }
  }
};
