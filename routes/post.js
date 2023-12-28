const express = require("express")
const router = express.Router()

//post-controller에서 만든 mongodb저장 함수 가져오기
const {createPost,getPost} = require("../controllers/post-controller")

router.get("/post",function(req,res) {
    res.render("post")
})

router.get("/posts", getPost)

module.exports = router