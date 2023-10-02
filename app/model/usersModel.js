const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    contactNum:{
        type: String
    },
    address:{
        type: String,
    },
    state:{
        type: String
    },
    city:{
        type: String
    },
    pinCode:{
        type: String
    },
    activeInd:{
        type: String
    },
    createdAt:{
        type: String   
    },
    profileURL:{
        type: String
    },
    role:{
        type: String
    }
});

const Users = mongoose.model('User',userSchema);
module.exports = Users;
