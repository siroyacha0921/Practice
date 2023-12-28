const express = require("express")
const router = express.Router()

//auth-controller에서 만든 mongodb저장 함수 가져오기
const createUser = require("../controllers/auth-controller.js")

router.get('/signUp', function (req, res) {
    res.render('signup')
})

router.post("/signUp", createUser)

module.exports = router