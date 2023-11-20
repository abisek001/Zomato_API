const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealtypeSchema = new Schema({
    mealName:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mealtypeConnection',mealtypeSchema,'mealtype');