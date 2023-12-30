const jwt = require("jsonwebtoken")
const User = require("../schemas/user.js")

module.exports = async (req,res,next) => {
    const { permission } = req.cookies

    const [permission_type, permission_token] = (permission ?? "").split(" ")

    if (!permission_token || permission_type !== "Bearer") {
        res.status(403).json({ errorMessage: "로그인이 필요한 기능입니다." })
        return
    }

    try {
        const { usertoken } = jwt.verify(permission_token, process.env.PRIVATE_KEY)
        const user = await User.findById(usertoken)
        res.locals.user = user
        next()
    } catch (error) {
        res.status(403).json({ errorMessage: "로그인이 필요한 기능입니다."})
        return
    }
}