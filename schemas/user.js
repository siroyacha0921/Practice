// mongodb 데이터베이스에 변수 저장
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        firstname: {
                type:String,
                require:true
        },
        lastname: {
                type:String,
                require:true
        },
        id: {
                type: String,
                require: true
        },
        password: {
                type:String,
                require: true
        }
    }
)

//_id = userId
UserSchema.virtual("userId").get(function () {
        return this._id.toHexString()
})
UserSchema.set("toJSON", {virtuals : true})

module.exports = mongoose.model("User", UserSchema)