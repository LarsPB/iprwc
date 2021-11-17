const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const {createAdmin} = require('./models/admin');

const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart');

mongoose.connect("mongodb+srv://Lars:ULMEI1Yjgbl39Ckq@cluster0.pbc2o.mongodb.net/shop?&w=majority")
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!');
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    next();
});


app.use("/api/products", productsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/user/cart", cartRoutes);

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log('api is running on port 3000');
});