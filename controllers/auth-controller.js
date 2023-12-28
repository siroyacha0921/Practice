// mongodb에 변수 업로드
const User = require("../schemas/user.js")

const createUser = async (req,res) => {
    const {firstname,lastname,id,password} =req.body
    await User.create({firstname,lastname,id,password})
}

module.exports = createUser

