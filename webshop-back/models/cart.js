const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product',
                required: true
            },
            quantity: { type: Number, required: true }
        }
    ]
});

module.exports = mongoose.model('Cart', cartSchema);