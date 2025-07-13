const express = require("express");
const router = express.Router();
const {handlerurlpost,handlerdataprint,handlerserver}=require("../controller/control")


router.get("/",handlerserver);
router.post("/",handlerurlpost)
router.get("/:id",handlerdataprint);
module.exports=router