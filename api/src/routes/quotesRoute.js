const { Router } = require('express');
const router = Router();
const {Quotes} = require("../db")

router.get("/",async(req,res)=>{

    const AverQueCarajoTiene = await Quotes.findAll()
    console.log(AverQueCarajoTiene[0])
    res.send(AverQueCarajoTiene)
    //res.send(await Quotes.findAll())
    
});





module.exports = router;