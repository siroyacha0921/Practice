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

const upDatePassword = async(req,res) => {
    const { permission } = req.cookies
    const [permission_type, permission_token] = (permission ?? "").split(" ")
    const { usertoken } = jwt.verify(permission_token, process.env.PRIVATE_KEY)
    const user = await User.findById(usertoken)
    const {repassword} = req.body
    if (repassword === undefined) {
        console.log("x")
        res.status(200).json(user)
    } else {
        console.log("y")
        const { userId } = user
        const { repassword } = req.body
        const update_done = await User.updateOne(
            { _id: userId },
            { $set: {password : repassword} }
        );
        if (update_done.modifiedCount === 0) {
            res.status(401).json({ errorCode: "P008" });
            return;
        }
        res.status(200).json(user)
    }
}

module.exports = { userId, upDatePassword }