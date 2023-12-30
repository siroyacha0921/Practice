async function req() {
    try {
        await axios.post("/checkuser")
        window.location.href = "/user/account"
    } catch (err) {
        alert(err.response.data.errorMessage)
        window.location.href = "/post"
    }
}

req()