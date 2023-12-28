//mongodb에 데이터 있는지 확인
const Post = require("../schemas/post.js")

const createPost = async (req,res) => {
    const { title, content} = req.body
    await Post.create({title,content})
}

const getPost = async (req,res) => {
    const findPosts = await Post.find({})
    res.json(findPosts)
}

module.exports = {createPost,getPost}
