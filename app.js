const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:false}));

const Order = require('./models/Order');
const sequelize = require('./util/database');

app.post('/order/add-order',async (req,res,next)=>{
    try{
        const price = req.body.price;
        const dish = req.body.dish;
        const table = req.body.table;

        const data = await Order.create({price:price,dish:dish,table:table});
        res.status(201).json({newOrderPlaced:data});
    } catch(error){
        console.log(JSON.stringify(error));
        res.status(500).json({error:error});
    }
});

app.get('/order/get-order',async (req,res,next)=>{
    try{
        const orders = await Order.findAll();
        res.status(200).json({allOrders:orders});
    } catch(error){
        console.log(JSON.stringify(error));
        res.status(500).json({error:error});
    }
});

app.delete('/order/delete-order/:id',async(req,res,next)=>{
    try{
        const orderID = req.params.id;
        await Order.destroy({where:{id:orderID}});
        res.sendStatus(200);
    } catch(error){
        console.log(JSON.stringify(error));
        res.status(500).json({error:error});
    }
});

sequelize.sync().then((response)=>{
    console.log(response);
    app.listen(5000);
}).catch(error=>console.log(error));

