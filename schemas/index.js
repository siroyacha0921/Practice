// mogoose mongodb 연결
const mongoose = require("mongoose")

const connect = () => {
    mongoose
        .connect("mongodb+srv://siroyacha0921:siro0921@cluster0.isbivkt.mongodb.net/")
        .then(() => console.log("MongoDB 연결 완료"))
        .catch((err) => console.log(err))

}

module.exports = connect