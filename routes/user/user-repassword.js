const express = require("express")
const router = express.Router()

router.get('/user/repassword', function (req, res) {
    res.render('user/user-repassword')
})

module.exports = router