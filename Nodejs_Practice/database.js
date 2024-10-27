const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("Connected to Mongodb successfully"); 
        })     
    }catch(err){
        console.log(`Error Connecting to database: "${err}`);
        
    }
}

module.exports = connectDB;