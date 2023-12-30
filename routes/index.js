const express=require("express")
const router = express.Router()

//routes 가져오기
const homepageRouter = require("./homepage.js")
const signinRouter = require("./signin.js")
const signupRouter = require("./signup.js")
const signfindRouter = require("./signfind.js")
const signoutRouter = require("./signout.js")
const postRouter = require("./post.js")
const userRouter = require("./user.js")
const writeRouter = require("./write.js")
const checkwriteRouter = require("./check/checkwrite.js")
const checkuserRouter = require("./check/checkuser.js")

// 적용
router.use("/", homepageRouter)
router.use("/", signinRouter)
router.use("/", signupRouter)
router.use("/", signfindRouter)
router.use("/", postRouter)
router.use("/", userRouter)
router.use("/", writeRouter)
router.use("/", signoutRouter)
router.use("/", checkwriteRouter)
router.use("/", checkuserRouter)

module.exports = router