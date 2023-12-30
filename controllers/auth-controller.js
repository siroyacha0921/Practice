const User = require("../schemas/user.js")

//token 다운
const jwt = require("jsonwebtoken")

// mongodb에 변수 업로드
const createUser = async (req,res) => {
    const {firstname,lastname,id,password} =req.body
    await User.create({firstname,lastname,id,password})
}

//mongodb에 데이터 있는지 확인
const checkUser = async (req,res) => {
    const { id, password} = req.body
    const user = await User.findOne({id})
    if (!user) {
        res.status(412).json({errorMessage: "아이디가 존재하지 않습니다."})
        return
    }
    if (user.password !== password) {
        res.status(412).json({errorMessage: "비밀번호가 일치하지 않습니다."})
        return
    }
    else {
        const token = jwt.sign({usertoken : user.userId}, process.env.PRIVATE_KEY)
        res.cookie("permission", `Bearer ${token}`, {
            maxAge : 99999999999999,
            httpOnly : true
        })
        res.status(201).json({successMessage: "로그인에 성공하였습니다."})
    }


}


module.exports = { createUser,checkUser }

