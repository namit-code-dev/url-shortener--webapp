const shortid = require("shortid")
const model = require("../model/schema");

async function handlerurlpost(req,res){
    const body=req.body
    const generate=shortid.generate()
    if ((!body.url.startsWith("http://"))&&(!body.url.startsWith("https://"))){
      httpurl="http://"+body.url
      await model.create({
    shortId:generate,
    redirecturl:httpurl
})
    }

res.status(201).json({
      message: "Short URL created",
      shortid: generate,
      redirecturl:httpurl
    });
  } 
  

async function handlerdataprint(req,res) {
  const id=req.params.id
  const findid= await model.findOne({shortId:id})
  if(!findid){
    res.status(500).json({
      message:"not found"
    })
  }
  else{
    res.redirect(findid.redirecturl)
  }

 
}

module.exports={handlerurlpost,handlerdataprint}