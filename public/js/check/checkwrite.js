async function req() {
    try { 
        await axios.post("/checkwrite")
        window.location.href = "/write"
    } catch (error) {
        alert(error.response.data.errorMessage)
        window.location.href = "/post"
    }
    
}

req()