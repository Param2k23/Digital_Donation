const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_id:{
        type: String,
        required: true,
        unique: true,
    },
    itemName:{
        type: String,
        required: true,
    },
    activeInd:{
        type: String,
        required: true,
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
});

const Items = mongoose.model('Items',itemSchema);
module.exports = Items;