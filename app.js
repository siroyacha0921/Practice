const express = require('express')
const app = express()
const path = require('path')
const mainRouter = require("./routes/index.js")
const connect = require("./schemas/index.js")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");

//html => ejs 기본연결
app.set('view engine', 'ejs');
app.set('views', './views');

//css js 연결,경로
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json())
app.use(cookieParser());
app.use("/", mainRouter)


//사이트 열기
app.listen(process.env.PORT,'0.0.0.0', () => console.log("8080포트열림"))

//mogoose 사용
connect()
//dotenv 사용
dotenv.config();