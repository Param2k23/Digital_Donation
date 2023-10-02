const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    contactNum:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
    activeInd:{
        type: String,
        required: true
    },
    createdAt:{
        type: String, 
        required: true   
    },
    profileURL:{
        type: String,
        required: true 
    },
    role:{
        type: String,
        required: true
    }
});

const Users = mongoose.model('User',userSchema);
module.exports = Users;
