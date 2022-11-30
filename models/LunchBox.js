const mongoose = require("mongoose")
const LunchBoxSchema = mongoose.Schema({
LunchBox_name: { type:String,required:true},
LunchBox_price: { type:Number,required:true, min:20, max:5000},
LunchBox_size: { type:String,required:true},
})
module.exports = mongoose.model("LunchBox",LunchBoxSchema)