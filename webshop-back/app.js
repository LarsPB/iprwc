const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const {createAdmin} = require('./models/admin');

const PORT = process.env.PORT || '3000';

const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart');
const { create } = require('./models/user');

mongoose.connect("mongodb+srv://Lars:" + process.env.MONGO_ATLAS_PW + "@cluster0.pbc2o.mongodb.net/shop?&w=majority")
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// To detect and recognise the angular scripts
app.use("/", express.static(path.join(__dirname,"angular")));

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

// Add the angular index.html to backend
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});



// Creates the admin account:
// createAdmin();

app.listen(PORT, () => {
    console.log(`api is running on port ${PORT}`);
});