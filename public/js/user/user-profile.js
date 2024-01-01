function moveSignOut() {
    window.location.href = "/signOut"
}

function moveUserAccount() {
    window.location.href = "/user/account"
}

async function userId() {
    const response = await axios.post("/user/profile")
    const userId = response.data.id
    console.log(userId)
    document.getElementById("input3").value = userId   
}

async function userFirstname() {
    const response = await axios.post("/user/profile")
    const userFirstname = response.data.firstname
    document.getElementById("input4").value = userFirstname
}

async function userLastname() {
    const response = await axios.post("/user/profile")
    const userFirstname = response.data.lastname
    document.getElementById("input5").value = userFirstname
}

function movePost() {
    window.location.href = "/post"
}

//프로필 이미지

userId()
userFirstname()
userLastname()