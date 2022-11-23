<template>
    <div class="main__inner">
        <app-pagination
            :totalPages="homeData.characters.value?.info?.pages"
            :maxVisibleButtons="3"
            :currentPage="homeData.currentPage.value"
            @pagechanged="homeData.onPageChange"
        ></app-pagination>
        <!-- modern syntax ?? -->
        <div v-if="homeData.characters.value?.results?.length">
            <div class="select-flex">
                <AppSelect
                    :options="homeData.gender.value"
                    v-model="homeData.selectedGender.value"
                />
            </div>
            <characters-column>
                <characters-item
                    v-for="item in homeData.charactersFiltered.value"
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
import { useHomeData } from '@/use/useHome'

const homeData = useHomeData()
</script>
