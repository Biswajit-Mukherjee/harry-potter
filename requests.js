let apiData

fetch('https://hp-api.herokuapp.com/api/characters/students', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
    }   else {
        throw new Error(response.status)
    }
}).then((data) => {
    apiData = data
    renderData(apiData)
}).catch((error) => {
    console.log(`Error occured. Error code: ${error}`)
})