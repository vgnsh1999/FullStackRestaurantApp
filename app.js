const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:false}));

const Order = require('./models/Order');
const sequelize = require('./util/database');

const orderRoutes = require('./routes/order');

app.use('/order',orderRoutes);


sequelize.sync().then((response)=>{
    console.log(response);
    app.listen(5000);
}).catch(error=>console.log(error));

