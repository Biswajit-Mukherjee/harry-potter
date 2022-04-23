const searchBox = document.querySelector('#searchbox')
const searchBoxClear = document.querySelector('#clear-search')
const houses = document.querySelector('.houses')
const gryffindor = document.querySelector('.house__gryffindor')
const slytherin = document.querySelector('.house__slytherin')
const ravenclaw = document.querySelector('.house__ravenclaw')
const hufflepuff = document.querySelector('.house__hufflepuff')
const noSearchMatchDiv = document.querySelector('#no-search-match')

const filters = {
    searchText: ''
}

searchBox.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
        showElement(searchBoxClear)
        filters.searchText = e.target.value
        renderData(apiData, filters)

        searchBoxClear.addEventListener('click', () => {
            clearElementValue(e.target)
            focusOnElement(e.target)
            hideElement(searchBoxClear)
            filters.searchText = ''
            renderData(apiData, filters)
        })
    }   else {
        hideElement(searchBoxClear)
        filters.searchText = ''
        renderData(apiData, filters)
    }
})