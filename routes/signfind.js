const express = require("express")
const router = express.Router()

router.get("/signFind",function(req,res) {
    res.render("signfind")
})

module.exports = router