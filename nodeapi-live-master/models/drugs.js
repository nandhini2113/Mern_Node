const mongoose = require("mongoose");


const drugSchema = new mongoose.Schema({
    drugName: { type:String, required:true},
    location : { type:String, required:true},
    dosage : { type:String, required:true},
    drugType: { type:String, required:true},
    createdAt : { type:Date, default:Date.now}
});

const Drug = mongoose.model("drugs",drugSchema)

module.exports = Drug