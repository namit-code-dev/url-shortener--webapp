const express=require("express")
const port=8000;
const app=express()
const connectdb=require('./connection/connect')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//connection
connectdb("mongodb://127.0.0.1:27017/url-shortener-webapp")
.then(()=>{console.log("database connected")})
.catch((err)=>{console.log("error is :",err)})

app.listen(8000,() =>console.log("server started"))