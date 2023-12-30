const express = require("express")
const router = express.Router()

//dotenv 사용
const dotenv = require("dotenv")
dotenv.config();
//user-controller에서 만든 checkUser함수 가져오기
const { createUser,checkUser } = require("../controllers/auth-controller.js")

router.get('/signIn', function (req, res) {
    res.render('signin')
})

router.post('/signIn', checkUser)

module.exports = router