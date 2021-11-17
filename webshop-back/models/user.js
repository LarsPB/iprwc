const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");


// blueprint for schema
const userSchema = mongoose.Schema({
    email: { 
        type: String, 
        require: true, 
        unique: true
    },
    password: { 
        type: String, 
        require: true 
    }
    ,
    roles: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN"],
      require: true
    },
    cart: {
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
    }
});

userSchema.methods.addToCart = function(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];
  
    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: product._id,
        quantity: newQuantity
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    this.cart = updatedCart;
    return this.save();
  };
  
userSchema.methods.removeFromCart = function(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString();
    });
    this.cart.items = updatedCartItems;
    return this.save();
  };

userSchema.methods.getCart = function() {
  return this.cart.items
}

userSchema.methods.clearCart = function() {
    this.cart = { items: [] };
    return this.save();
  };
  



// Plugin zorgt ervoor dat je een error krijgt.
userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', userSchema);


