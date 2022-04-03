const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017').then(() => {
  console.log('connected to mongodb');
});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todoRoutes = require('./expressRoutes/todoRoutes');
app.use('/todo', todoRoutes);

app.listen(4000, () => {
  console.log('listening to port 4000');
});
