const mongoose = require('mongoose');

const item_requestSchema = new mongoose.Schema({
    item_request_id:{
        type: String,
        required: true,
        unique: true,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    item_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    requestDate:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required : true,
    },
});

const Item_requests = mongoose.model('Item_requests',item_requestSchema);
module.exports = Item_requests;