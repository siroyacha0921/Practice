const express = require("express")
const router = express.Router()

router.get('/homepage', function (req, res) {
    res.render('homepage')
})

module.exports = router