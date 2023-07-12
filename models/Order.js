const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Order = sequelize.define('order',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    price:{
        type:Sequelize.STRING
    },
    dish:{
        type:Sequelize.STRING
    },
    table:{
        type:Sequelize.STRING
    }
});

module.exports = Order;