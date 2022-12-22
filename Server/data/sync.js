const {User,Customer,Hospital,Appointment,AppointmentGuest,Bloodgroup,Feedback,Request,Payment} = require('./models');

// Sync models with database.
User.sync({alter: true});
Customer.sync({alter: true});
Appointment.sync({alter: true});
// AppointmentGuest.sync({alter: true});
// Bloodgroup.sync({alter: true});
Hospital.sync({alter: true});
Request.sync({alter: true});
Payment.sync({alter: true});
Feedback.sync({alter: true});