const express = require('express');
const bodyParser = require('body-parser');
const publicRoutes = require('./apps/public/routes');
const customerRoutes = require('./apps/customer/customerRoutes');
const dotEnv = require('dotenv');
// const authMiddleware = require('./middlewares/authMiddleware');
const cors = require('cors');

dotEnv.config();

const app = express();

app.use(cors({origin: '*'}));
// app.use(authMiddleware);
// app.use(bodyParser.json({inflate: true}));
app.use(bodyParser.json());


app.use('/register', publicRoutes);
app.use('/user', customerRoutes);

app.listen(80);