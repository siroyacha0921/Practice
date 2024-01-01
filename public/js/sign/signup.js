// 사이트 이동 경로
function moveSignIn() {
    window.location.href = "/signIn"
}

function moveSignFind() {
    window.location.href = "/signFind"
}

// 변수 설정
let firstname =""
let lastname = ""
let id = ""
let password = ""

// 함수 설정
function signUpfirstname() {
    firstname = document.getElementById("input1").value
}

function signUplastname() {
    lastname = document.getElementById("input2").value
}

function signUpid() {
    id = document.getElementById("input3").value
}

function signUppassword() {
    password = document.getElementById("input4").value
}

function signUpfinish() {
    if (firstname === "") {
        alert("성姓을 입력해주세요.")
        return
    }   if (lastname === "") {
        alert("이름(성은 제외)을 입력해주세요.")
        return
    }   if (id === "") {
        alert("아이디를 입력해주세요.")
        return
    }   if (password === "") {
        alert("비밀번호를 입력해주세요.")
        return
    }
    alert("회원가입이 완료되었습니다.")
    const req = {
        //서버에 보내줄 변수에 정보 저장
        firstname : firstname,
        lastname : lastname,
        id : id,
        password : password
    }
    // signUp페이지에서 => 서버로 데이터 전송
    axios.post("/signUp", req)
    window.location.href = "/signIn"
}