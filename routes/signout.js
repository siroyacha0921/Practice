const express = require("express")
const router = express.Router()
const User = require("../schemas/user.js")

router.get('/signOut',(req,res)=>{
    res.clearCookie('permission').redirect("/post")
});

module.exports = router