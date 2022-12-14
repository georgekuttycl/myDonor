const {User,Customer,Hospital,Appointment,AppointmentGuest,bloodGroup,request,payment,feedback} = require('./models');

// Sync models with database.
User.sync({alter: true});
Customer.sync({alter: true});
Appointment.sync({alter: true});
AppointmentGuest.sync({alter: true});
bloodGroup.sync({alter: true});
Hospital.sync({alter: true});
request.sync({alter: true});
payment.sync({alter: true});
feedback.sync({alter: true});
