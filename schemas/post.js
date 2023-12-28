// mongodb 데이터베이스에 변수 저장
const mongoose = require("mongoose");

const Postschema = new mongoose.Schema({
        title: {
                type:String,
                require:true
        },
        content: {
                type:String,
                require:true
        },
        createdAt: {
                type:Date,
                default:Date.now
        }
    }
)

module.exports = mongoose.model("Post", Postschema)