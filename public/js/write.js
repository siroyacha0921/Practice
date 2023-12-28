// 이동 function
function moveHomepage() {
    window.location.href = "/post"
}

function moveUser() {
    window.location.href = "/user"
}

//글자수 세기
let counter = 0

function textCounter() {
    counter = document.getElementById("textarea1").value.length
    console.log(counter)
    document.getElementById("span1").textContent = "문자:"+counter
}

//게시글 서버로 보내기
let title = ""
let content = ""

function writeFinish() {
    title = document.getElementById("input2").value
    content = document.getElementById("textarea1").value
    if (title === "") {
        alert("제목을 입력해주세요.")
        return
    }
    if (content === "") {
        alert("내용을 입력해주세요.")
        return
    }
    alert("작성이 완료되었습니다.")
    const req = {
        title : title,
        content : content
    }
    axios.post("/write",req)
    window.location.href = "/post"
}
