const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    restaurantId :{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('restarantMenu',menuSchema, 'menu');