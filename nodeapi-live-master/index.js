const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database");
const usersRoute = require("./routes/userRoutes");
const drugRoute = require("./routes/drugRouter");
const cors = require("cors")
const PORT = 3000;
app = express();    
dotenv.config();  


// Connnect to Databse
connectDB();

app.use(cors({
    origin:["http://localhost:3001","http://localhost:3002"],
    allowedHeaders:"Content-Type,Authorization",
    methods:"GET,PUT,POST,DELETE,OPTIONS,PATCH"
}))
app.use(express.json());
app.use("/users",usersRoute);
app.use("/drugs",drugRoute)
app.get("",(req,res)=>{
    res.json({message:"Hellow  World"});
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port no http://localhost:${process.env.PORT} `)
})