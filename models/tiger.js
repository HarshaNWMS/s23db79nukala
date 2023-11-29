const mongoose = require("mongoose")
const tigerSchema = mongoose.Schema({
tiger_color: String,
tiger_breed: String,
tiger_price: {
    type: Number,
    min: [1000, 'The tiger price must be greater than or equal to 0'], 
    max: [3000000, 'The tiger price cannot exceed 30000'], 
    required: [true, 'tiger price is required'] 
    }
})
module.exports = mongoose.model("tiger",
tigerSchema)