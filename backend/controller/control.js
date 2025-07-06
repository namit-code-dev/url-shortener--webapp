const shortid = require("shortid")
const model = require("../model/schema");

async function handlerurlpost(req,res){
    const body=req.body
    const generate=shortid.generate()
await model.create({
    shortId:generate,
    redirecturl:body.url
})
res.status(201).json({
      message: "Short URL created",
      shortid: generate,
      redirecturl:body.url
    });
  } 

module.exports={handlerurlpost}