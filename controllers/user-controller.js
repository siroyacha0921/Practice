//mongodb에 데이터 있는지 확인
const User = require("../schemas/user.js")
const jwt = require("jsonwebtoken")

const userId = async(req,res) => {
    const { permission } = req.cookies
    const [permission_type, permission_token] = (permission ?? "").split(" ")
    const { usertoken } = jwt.verify(permission_token, process.env.PRIVATE_KEY)
    const user = await User.findById(usertoken)
    res.status(200).json(user)
}

module.exports = userId