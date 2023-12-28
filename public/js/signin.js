//변수 설정
let id = ""
let password = ""

// 함수 설정
function moveSignUp() {
    window.location.href = "/signUp"
}

function moveSignFind() {
    window.location.href = "/signFind"
}

function signInid() {
    id = document.getElementById("input1").value
}

function signInpassword() {
    password = document.getElementById("input2").value
}

async function signInfinish() {
    const req = {
        id : id,
        password : password
    }
    try {
        const res = await axios.post("/signIn", req)
        alert(res.data.successMessage)
        window.location.href = "/homepage"
        
    } catch(error) {
        alert(error.response.data.errorMessage)
        return
    }
}