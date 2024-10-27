const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema(
    {
        username :{type:String, required:true},
        email: {type:String, required:true},
        password :{type:String, required:true},
        createdAt :{type:Date,default:Date.now}
});

const Student = mongoose.model("Student",stuSchema);

module.exports = Student;