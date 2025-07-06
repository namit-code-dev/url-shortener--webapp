const express=require("express")
const port=8000;
const app=express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.listen(8000,() =>console.log("server started"))