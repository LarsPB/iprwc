const express = require('express');


const Product = require('../models/product');
const checkAuth = require("../middleware/check-auth");
const checkIfAdmin = require("../middleware/checkAdmin");

const router = express.Router();

router.post("", checkAuth, checkIfAdmin, (req, res, next) => {
    const product = new Product({
      name: req.body.name,
      imagePath: req.body.imagePath,
      price: req.body.price,
      description: req.body.description
    });
    product.save().then(createdProduct => {
      res.status(201).json({
        message: 'Product added succesfully',
        productId: createdProduct._id
      });
    });
});

router.put("/:id", checkAuth, checkIfAdmin, (req, res, next) => {
    const product = new Product({
        _id: req.body.id,
        name: req.body.name,
        imagePath: req.body.imagePath,
        price: req.body.price,
        description: req.body.description
    });
    Product.updateOne({_id: req.params.id}, product).then(result => {
        // console.log(result);
        res.status(200).json({message: 'Update successfull!'});
    });
});

router.get("", (req, res, next) => {
    Product.find()
        .then(documents => {
            res.status(200).json({
            message: 'Products fetched succesfully!',
            products: documents
            });
        });
});


router.delete("/:id", checkAuth, checkIfAdmin,  (req, res, next) => {
    Product.deleteOne({_id: req.params.id}).then(result => {
        // console.log(result)
        res.status(200).json({ message: "Product deleted!" })
    });
});


module.exports = router;