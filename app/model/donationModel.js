const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    donation_id:{
        type: String,
        required: true,
        unique: true,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    item_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
    },
    date:{
        type: String,
        required: true,
    },
    assignInd:{
        type: String,
        required: true,
    },
    activeInd:{
        type: String,
        required: true,
    },
    title : String,
    keywords : String,
    description : String,
});

const Donations = mongoose.model('Donations',donationSchema);
module.exports = Donations;