const express = require("express");
const router = express.Router();
const {handlerurlpost,handlerdataprint}=require("../controller/control")

router.post("/",handlerurlpost)
router.get("/:id",handlerdataprint);
module.exports=router