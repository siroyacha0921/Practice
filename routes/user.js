const express = require("express")
const router = express.Router()

router.get("/user", function(req,res) {
    res.render("user")
})

module.exports = router