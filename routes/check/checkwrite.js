const express = require("express")
const router = express.Router()

const authmiddleware = require("../../middleware/auth-middleware.js")

router.get("/checkwrite", function (req,res) {
    res.render("check/checkwrite")
})
router.post("/checkwrite", authmiddleware, function(req,res) {
    res.redirect("/write")
})

module.exports = router 