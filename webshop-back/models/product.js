const mongoose = require('mongoose');

// blueprint for schema
const productSchema = mongoose.Schema({
    name: { type: String, require:true},
    imagePath: { type: String, require:true},
    price: { type: String, require:true},
    description: { type: String }
});

module.exports = mongoose.model('Product', productSchema);