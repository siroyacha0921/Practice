// 이동 fuction
function moveLogIn() {
    window.location.href = "/signIn"
}
function movePost() {
    window.location.href = "/post"
}
//메뉴 function
let menuNumber = 1
function menu() {
    menuNumber+=1
    console.log(menuNumber%2)
    if(menuNumber%2 === 1) {
        menuOpen()
        return;
    } else {
        menuClose()
    }
}

function menuOpen() {
    document.getElementById("div2").style.left = 100 + 'px';
}

function menuClose() {
    document.getElementById("div2").style.left = 0 + 'px';
}