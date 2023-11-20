const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
    Name:{
        type: String,
        required:true
    },
    MobileNumber:{
        type: Number,
        required:true
    },
    Address:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('SaveUserDetails', detailSchema, 'userDetails');