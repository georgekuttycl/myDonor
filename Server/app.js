const express = require('express');
const bodyParser = require('body-parser');
const publicRoutes = require('./apps/public/routes');
const adminRoutes = require('./apps/admin/adminRoutes');
const customerRoutes = require('./apps/customer/customerRoutes')
const hospitalRoutes = require('./apps/hospital/hospitalRoutes');

const dotEnv = require('dotenv');
 const authMiddleware = require('./middlewares/authMiddleware');
const cors = require('cors');

dotEnv.config();

const app = express();

app.use(cors({origin: '*'}));
 app.use(authMiddleware);
 app.use(bodyParser.json({inflate: true}));
app.use(bodyParser.json());



app.use('/admin', adminRoutes);
app.use('/user', hospitalRoutes);
app.use('/', publicRoutes);
app.use('/customer', customerRoutes);

app.listen(80);