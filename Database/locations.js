const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name:{
        type: String
    }
})

module.exports = mongoose.model('cityname',locationSchema,'locations');