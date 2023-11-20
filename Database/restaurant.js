const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    city_name:{
        type: String,
        required: true
    },
    name: {
        type: String
    },
    loaclity: {
        type: String
    },
    city: {
        type: Number
    },
    area: {
        type: Number
    },
    address: {
        type: String
    },
    thumb: {
        type: String
    },
    cost: {
        type: Number
    },
    number: {
        type: Number
    },
    name: {
        type: String
    },
    type: [{
        mealtype: Number,
        name: String
    }],
    Cuisine:[{
        cuisine: Number,
        name: String
    }],
    mealName: {
        type: String,
        required: true
    },
    contact:{
        type:String
    },
})

module.exports = mongoose.model('filteredcityname',restaurantSchema,'rastaurant');