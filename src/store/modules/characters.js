const state = {
    items: [],
    favoritesItems: JSON.parse(localStorage.getItem('favorites')) || [],
}

const getters = {
    characters: (state) => state.items,
    favoritesCharacters: (state) => state.favoritesItems,
}

const actions = {
    async getCharacters({ state }) {
        // getting products onMounted
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()
        let favorites = checkLocal()
        // checking every products if product already has in localStorage
        // then we add favorite true to the product
        if (favorites.length) {
            favorites.forEach((i) => {
                data.results.forEach((e) => {
                    if (i.id === e.id) {
                        e.favorite = true
                    }
                })
            })
        }
        state.items = data
    },
    async getCharactersByPage({ state }, page) {
        // updating products page when change the currPage
        const res = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}`
        )
        const data = await res.json()
        let favorites = checkLocal()
        // checking every products if product already has in localStorage
        // then we add favorite true to the product
        if (favorites.length) {
            favorites.forEach((i) => {
                data.results.forEach((e) => {
                    if (i.id === e.id) {
                        e.favorite = true
                    }
                })
            })
        }
        state.items = data
    },
}

const mutations = {
    setLike(state, item) {
        // set to object favorite true and save full obj to localStorage, so when we getting it it will automaticcly set like
        item.favorite = true
        let favorites = checkLocal()
        favorites.push(item)
        state.favoritesItems.push(item)
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },
    removeLike(state, item) {
        // set to object favorite false and remove full obj to localStorage
        item.favorite = false
        let favorites = checkLocal()
        favorites = favorites.filter((i) => i.id !== item.id)
        state.favoritesItems = state.favoritesItems.filter(
            (i) => i.id !== item.id
        )
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },
}

// check if we already have a localStorage
const checkLocal = () => {
    let favorites
    if (localStorage.getItem('favorites') === null) {
        favorites = []
    } else {
        favorites = JSON.parse(localStorage.getItem('favorites'))
    }
    return favorites
}

export default {
    state,
    getters,
    actions,
    mutations,
}
