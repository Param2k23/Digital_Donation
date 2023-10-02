const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
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
    pinCode:{
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
