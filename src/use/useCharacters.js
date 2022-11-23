import { computed } from 'vue'
import { useStore } from 'vuex'

// using reuseable composable for CharactersItem and FavoriteItem
export function useCharacters(item) {
    const store = useStore()
    const likes = computed(() => item.favorite)
    let status = item.favorite || false
    const favorite = () => {
        status = status === false ? (status = true) : (status = false)
        if (status === true) {
            store.commit('setLike', item)
        } else {
            store.commit('removeLike', item)
        }
    }

    return {
        likes,
        favorite,
    }
}
