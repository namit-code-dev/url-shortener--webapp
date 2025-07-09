const express=require("express")
const port = process.env.PORT || 8000;

const app=express()
const connectdb=require('./connection/connect')
const router=require("./routes/routes")
const cors=require("cors")
require('dotenv').config();

//for interface
app.use(cors());

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api", router);


//connection
console.log("MONGO_URL:", process.env.MONGO_URL);
connectdb(process.env.MONGO_URL)
.then(()=>{console.log("database connected")})
.catch((err)=>{console.log("error is :",err)})

app.listen(port,() =>console.log("server started"))

