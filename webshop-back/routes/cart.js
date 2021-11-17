const express = require('express');
const User = require('../models/user');

const router = express.Router();

const Product = require("../models/product");
const checkAuth = require("../middleware/check-auth");

router.post("", checkAuth, (req, res, next) => {
    const product = new Product({
        _id: req.body.id,
        name: req.body.name,
        imagePath: req.body.imagePath,
        price: req.body.price,
        description: req.body.description
    });
    User.findById(req.userData.userId)
        .then(user => {
            user.addToCart(product)
        })
    return res.status(200).json({});
});

router.get("", checkAuth, (req, res, next) => {
    const user =  User.findById(req.userData.userId);
    user.populate('cart.items.productId')
        .then(products => {
            res.status(200).json({
                message: 'Cart fetched succesfully!',
                products: products.cart.items
            });
        })
});


router.delete("/:id", checkAuth, (req, res, next) => {
    User.findById(req.userData.userId)
    .then(user => {
        user.removeFromCart(req.params.id)
    })
    return res.status(200).json({ message: "Product deleted!" });
});

module.exports = router;