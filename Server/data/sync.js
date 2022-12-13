const {User,Customer,Hospital} = require('./models');

// Sync models with database.
User.sync({alter: true});
Customer.sync({alter: true});
Hospital.sync({alter: true});
