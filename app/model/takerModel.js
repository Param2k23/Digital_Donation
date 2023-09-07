const mongoose = require('mongoose');

const takerSchema = new mongoose.Schema({
    taker_id:{
        type: String,
        required: true,
        unique: true,
    },
    item_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
    },
    activeInd:{
        type: String,
        required: true,
    },
    issueDate:{
        type: String,
        required: true,
    },
    releaseDate:{
        type: String,
        required: true,
    },
    dueDate:{
        type: String,
        required: true,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    donation_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donations',
    },
});

const Taker = mongoose.model('Taker',takerSchema);
module.exports = Taker;