const mongoose =require("mongoose")


const schema=mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirecturl:{
        type:String,
        required:true
    },
    visithistory:[{
          timestamp:true
    }]
},{timestamp:true})

const model=schema.model("client",schema)

module.exports=model