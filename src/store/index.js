import { createStore } from 'vuex'
import characters from './modules/characters'

export default createStore({
    modules: {
        characters,
    },
})
