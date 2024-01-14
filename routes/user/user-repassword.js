const express = require("express")
const router = express.Router()
const { userId, upDatePassword } = require("../../controllers/user-controller")
const authmiddleware = require("../../middleware/auth-middleware.js")

router.get('/user/repassword', function (req, res) {
    res.render('user/user-repassword')
})

router.post("/user/repassword",authmiddleware,upDatePassword)

module.exports = router