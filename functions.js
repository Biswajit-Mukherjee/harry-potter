const generateHouseDOM = (house, houseClassName, query) => {
    const houseDiv = document.querySelector(`.${houseClassName}`)
    houseDiv.classList.remove('hidden')

    const houseDivBody = document.querySelector(`.${houseClassName} > .house__body`)
    houseDivBody.innerHTML = ''

    house = house.filter((member) => {
        return member.name.toLowerCase().includes(query.toLowerCase())
    })

    house.forEach((member) => {
        const characterDiv = generateCharacterDOM(member.name)
        houseDivBody.appendChild(characterDiv)
    })
}

const generateCharacterDOM = (name) => {
    const character = document.createElement('div')
    character.classList.add('character')
    character.textContent = name
    return character
}

const filterByHouse = (data, houseName) => data.filter((member) => {
    return member.house === houseName
})

const renderData = (data) => {
    hideElement(noSearchMatchDiv)
    showElement(houses)

    const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    if (filteredData.length > 0) {
        // Gryffindor house
        const houseGryffindor = filterByHouse(filteredData, 'Gryffindor')
        if (houseGryffindor.length > 0) {
            generateHouseDOM(houseGryffindor, 'house__gryffindor', filters.searchText)
        }   else {
            hideElement(gryffindor)
        }
    
        // Slytherin house
        const houseSlytherin = filterByHouse(filteredData, 'Slytherin')
        if (houseSlytherin.length > 0) {
            generateHouseDOM(houseSlytherin, 'house__slytherin', filters.searchText)
        }   else {
            hideElement(slytherin)
        }

        // Ravenclaw house
        const houseRavenclaw = filterByHouse(filteredData, 'Ravenclaw')
        if (houseRavenclaw.length > 0) {
            generateHouseDOM(houseRavenclaw, 'house__ravenclaw', filters.searchText)
        }   else {
            hideElement(ravenclaw)
        }

        // Hufflepuff house
        const houseHufflepuff = filterByHouse(filteredData, 'Hufflepuff')
        if (houseHufflepuff.length > 0) {
            generateHouseDOM(houseHufflepuff, 'house__hufflepuff', filters.searchText)
        }   else {
            hideElement(hufflepuff)
        }
    }   else {
        hideElement(houses)
        showElement(noSearchMatchDiv)
    }
}

const clearElementValue = (element) => {
    element.value = ''
}

const hideElement = (element) => {
    element.classList.add('hidden')
}

const showElement = (element) => {
    element.classList.remove('hidden')
}

const focusOnElement = (element) => {
    element.focus()
}