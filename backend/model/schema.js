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
          timestamp:{
            type:String
          }
    }]
},{timestamp:true})

const model=mongoose.model("client",schema)

module.exports=model