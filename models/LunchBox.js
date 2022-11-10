const mongoose = require("mongoose")
const LunchBoxSchema = mongoose.Schema({
LunchBox_name: String,
LunchBox_price: Number,
LunchBox_size: String
})
module.exports = mongoose.model("LunchBox",LunchBoxSchema)