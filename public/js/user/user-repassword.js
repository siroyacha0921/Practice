function moveAccount() {
    window.location.href = "/user/account"
}

let password =""
let repassword = ""
let checkrepassword = ""

function accountPassword() {
    password = document.getElementById("input2").value
}

function accountRepassword() {
    repassword = document.getElementById("input3").value
}

function accountCheckRepassword() {
    checkrepassword = document.getElementById("input4").value
}

async function accountFinish() {
    if (password === "") {
        alert("현재 비밀번호를 입력해주세요.")
        return
    }
    if (repassword === "") {
        alert("변경할 비밀번호를 입력해주세요.")
        return
    }   if (checkrepassword === "") {
        alert("비밀번호 확인을 입력해주세요.")
        return
    }   if (checkrepassword !== repassword) {
        alert("비밀번호가 올바르지 않습니다.")
        return
    }
    const response1 = await axios.post("/user/repassword")
    const userPassoword = response1.data.password
    if (userPassoword !== password) {
        alert("현재 비밀번호가 옳바르지 않습니다.")
        return
    }
    const req = {
        repassword : repassword
    }
    const response2 = await axios.post("/user/repassword", req)
    alert("변경이 완료되었습니다.")
    window.location.href = "/signOut"
}