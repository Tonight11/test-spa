<template>
    <div class="main__inner">
        <app-pagination
            :totalPages="characters?.info?.pages"
            :maxVisibleButtons="3"
            :currentPage="currentPage"
            @pagechanged="onPageChange"
        ></app-pagination>

        <div v-if="characters?.results?.length">
            <div class="select-flex">
                <AppSelect :options="gender" v-model="selectedGender" />
            </div>
            <characters-column>
                <characters-item
                    v-for="item in charactersFiltered"
                    :key="item.id"
                    :item="item"
                ></characters-item
            ></characters-column>
        </div>
        <div v-else>
            <AppLoader />
        </div>
    </div>
</template>

<script setup>
import AppLoader from '@/UI/AppLoader.vue'
import AppPagination from '@/UI/AppPagination.vue'
import AppSelect from '@/UI/AppSelect.vue'
import CharactersColumn from '@/components/CharactersColumn.vue'
import CharactersItem from '@/components/CharactersItem.vue'
import { computed } from '@vue/reactivity'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const characters = computed(() => store.getters.characters)
const gender = ['Male', 'Female']
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

onMounted(() => {
    store.dispatch('getCharacters')
})
</script>
