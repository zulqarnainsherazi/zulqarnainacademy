

const mongoose = require('mongoose');

console.log("Mongoose installed successfully!");


mongoose.connect('mongodb://127.0.0.1:27017/testdb')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));