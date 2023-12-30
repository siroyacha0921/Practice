function moveSignOut() {
    window.location.href = "/signOut"
}

async function userId() {
    const response = await axios.post("/user")
    const userId = response.data.id
    document.getElementById("").innerHTML = userId   
}

async function userFirstname() {
    const response = await axios.post("/user")
    const userFirstname = response.data.firstname
    document.getElementById("").innerHTML = userFirstname
}

async function userLastname() {
    const response = await axios.post("/user")
    const userFirstname = response.data.lastname
    document.getElementById("").innerHTML = userFirstname
}

function movePost() {
    window.location.href = "/post"
}

//프로필 이미지

