const express = require("express");
const router = express.Router();
const {handlerurlpost}=require("../controller/control")

router.post("/",handlerurlpost)

module.exports=router