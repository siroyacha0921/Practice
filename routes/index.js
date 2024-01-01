const express=require("express")
const router = express.Router()

//routes 가져오기
const homepageRouter = require("./homepage.js")
const postRouter = require("./post.js")
const writeRouter = require("./write.js")

const signinRouter = require("./sign/signin.js")
const signupRouter = require("./sign/signup.js")
const signfindRouter = require("./sign/signfind.js")
const signoutRouter = require("./sign/signout.js")

const userprofileRouter = require("./user/user-profile.js")
const useraccountRouter = require("./user/user-account.js")
const userrepasswordRouter = require("./user/user-repassword.js")

const checkwriteRouter = require("./check/checkwrite.js")
const checkuserRouter = require("./check/checkuser.js")

// 적용
router.use("/", homepageRouter)
router.use("/", postRouter)
router.use("/", writeRouter)

router.use("/", signinRouter)
router.use("/", signupRouter)
router.use("/", signfindRouter)
router.use("/", signoutRouter)

router.use("/", userprofileRouter)
router.use("/", useraccountRouter)
router.use("/", userrepasswordRouter)

router.use("/", checkwriteRouter)
router.use("/", checkuserRouter)

module.exports = router