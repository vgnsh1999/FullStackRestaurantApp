const Order = require('../models/Order');

const addOrder = async (req,res,next)=>{
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
};

const getOrder = async (req,res,next)=>{
    try{
        const orders = await Order.findAll();
        res.status(200).json({allOrders:orders});
    } catch(error){
        console.log(JSON.stringify(error));
        res.status(500).json({error:error});
    }
};

const deleteOrder = async(req,res,next)=>{
    try{
        const orderID = req.params.id;
        await Order.destroy({where:{id:orderID}});
        res.sendStatus(200);
    } catch(error){
        console.log(JSON.stringify(error));
        res.status(500).json({error:error});
    }
};

module.exports = {
    addOrder,
    getOrder,
    deleteOrder
};