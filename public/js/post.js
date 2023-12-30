// 이동 function
function moveHomepage() {
    window.location.href = "/homepage"
}

function moveUser() {
    window.location.href = "/checkuser"
}

function moveWrite() {
    window.location.href = "/checkwrite"
}

async function loadingPost() {
    const response = await axios.get("/posts")
    const posts = response.data
    for (let i = 0; i < posts.length; i++) {
        const number = i+1
        const title = posts[i].title
        const content = posts[i].content
        const createdAt = posts[i].createdAt
        //html에 넣기
        //틀
        const newdiv = document.createElement('div')
        newdiv.className = "newbigdiv"
        newdiv.id = "newbigdiv"+i
        document.getElementById("bigdiv2").appendChild(newdiv)
        //내용-number
        const newdiv1 = document.createElement('span')
        newdiv1.className = "newsmalldiv1"
        const newtext1 = document.createTextNode(number)
        newdiv1.appendChild(newtext1)
        document.getElementById("newbigdiv"+i).appendChild(newdiv1)
        //내용-title
        const newdiv2 = document.createElement('span')
        newdiv2.className = "newsmalldiv2"
        const newtext2 = document.createTextNode(title)
        newdiv2.appendChild(newtext2)
        document.getElementById("newbigdiv"+i).appendChild(newdiv2)
        //내용-title
        //내용-title
        //내용-title
    }
}

loadingPost()