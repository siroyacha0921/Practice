const express = require("express")
const router = express.Router()

router.get('/signOut',(req,res)=>{
    res.clearCookie('permission').redirect("/post")
});

module.exports = router