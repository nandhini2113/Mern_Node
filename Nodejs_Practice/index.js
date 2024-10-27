const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database");
const stuRouter = require("./Routers/stuRouters")
const cors = require("cors")
dotenv.config();

connectDB();

port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/students",stuRouter);

app.use(cors({
    origin:["http://localhost:3001","http://localhost:3002"],
    allowedHeaders:"Content-Type,Authorization",
    methods:"GET,PUT,POST,DELETE,OPTIONS,PATCH"
}))

// app.get("",(req,res)=>{
//     res.send("Hello world");
// })

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}->http://localhost:${port}`);
});


