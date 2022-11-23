<template>
    <div class="favorite" v-if="favorite?.length">
        <characters-column>
            <TransitionGroup name="list">
                <FavoriteItem
                    v-for="item in favorite"
                    :key="item.id"
                    :item="item"
                />
            </TransitionGroup>
        </characters-column>
    </div>
    <div v-else>Нет любимых персонажей</div>
</template>

<script setup>
import { useStore } from 'vuex'
import CharactersColumn from '@/components/CharactersColumn.vue'
import FavoriteItem from '@/components/FavoriteItem.vue'
import { computed } from '@vue/reactivity'

const store = useStore()

// get favorites characters from vuex store
const favorite = computed(() => store.getters.favoritesCharacters)
</script>

<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
