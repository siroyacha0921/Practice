const express = require("express")
const router = express.Router()
const User = require("../../schemas/user.js")
const { userId, upDatePassword } = require("../../controllers/user-controller.js")

router.get("/user/account", function(req,res) {
    res.render("user/user-account")
})

router.post("/user/account", userId)

module.exports = router