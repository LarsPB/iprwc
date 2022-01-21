const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || '3000';
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart');

mongoose.connect("mongodb+srv://Lars:" + process.env.MONGO_ATLAS_PW + "@cluster0.pbc2o.mongodb.net/shop?&w=majority")
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// To detect and recognise the angular scripts
app.use("/", express.static(path.join(__dirname,"angular")));

app.use("/api/products", productsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/user/cart", cartRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

app.listen(PORT, () => {
    console.log(`api is running on port ${PORT}`);
});