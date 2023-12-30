const express = require("express")
const router = express.Router()

const authmiddleware = require("../../middleware/auth-middleware.js")

router.get("/checkuser", function (req,res) {
    res.render("check/checkuser")
})

router.post("/checkuser",authmiddleware, function(req,res) {
    res.redirect("/user/account")
})

module.exports = router