const mongoose  = require("mongoose");
const Txhistory  = mongoose.model(
    "Txhistory",
    new mongoose.Schema({
        address: { type: String, required: true },
        txdata: { type: String, required: true },
    })
)
module.exports=Txhistory;
