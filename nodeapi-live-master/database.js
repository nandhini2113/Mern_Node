const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const connectDB = async () => {
    try {
        // mongoose.connect(process.env.MONGO_URL).then(()=>{
        //     console.log("connected to MONGODB Successfullly")
        // }).catch(()=>{
        //     console.log("Error in connectiing")
        // })
        await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log("connected to MONGODB Successfullly")
    }
    catch (err) {
        console.log("error in conecting with this error :" + err)
    }
}




module.exports = connectDB;