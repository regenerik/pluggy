const { Router } = require('express');
const router = Router();
const {Quotes} = require("../db")
const { averageForAll } = require("../generalControllers.js")

router.get("/",async(req,res)=>{
    res.send(await averageForAll())
});





module.exports = router;