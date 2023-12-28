const express = require("express")
const router = express.Router()

//post-controller에서 만든 mongodb저장 함수 가져오기
const {createPost,getPost} = require("../controllers/post-controller")

router.get("/write", function (req,res) {
    res.render("write")
})

router.post("/write", createPost)

module.exports = router