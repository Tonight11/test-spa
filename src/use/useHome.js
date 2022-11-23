import { computed } from '@vue/reactivity'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export function useHomeData() {
    const store = useStore()
    const characters = computed(() => store.getters.characters)
    const gender = ref(['Male', 'Female'])
    const selectedGender = ref(null)
    const currentPage = ref(1)

    const charactersFiltered = computed(() =>
        store.getters.characters.results.filter((i) => {
            if (selectedGender.value === 'Male') {
                return i.gender === 'Male'
            }
            if (selectedGender.value === 'Female') {
                return i.gender === 'Female'
            }
            return i
        })
    )

    const onPageChange = (page) => {
        currentPage.value = page
        store.dispatch('getCharactersByPage', currentPage.value)
    }
    const mounted = onMounted(() => {
        store.dispatch('getCharacters')
    })

    return {
        characters,
        currentPage,
        gender,
        charactersFiltered,
        onPageChange,
        mounted,
        selectedGender,
    }
}
