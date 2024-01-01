const express = require("express")
const router = express.Router()
const User = require("../../schemas/user.js")
const userId= require("../../controllers/user-controller.js")

router.get("/user/profile", function(req,res) {
    res.render("user/user-profile")
})

router.post("/user/profile", userId)
module.exports = router