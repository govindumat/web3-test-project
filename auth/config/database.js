require("dotenv").config();
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI : ",MONGO_URI);
const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;