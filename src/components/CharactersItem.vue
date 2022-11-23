<template>
    <div class="characters__column p-2">
        <div class="characters__item">
            <div class="characters__like">
                <FavoriteIcon
                    :status="characters.likes.value"
                    @click="characters.favorite"
                />
            </div>
            <img :src="item.image" :alt="item.name" />
            <div class="characters__info">
                <div class="characters__name">Name: {{ item.name }}</div>
                <div class="characters__gender">Gender: {{ item.gender }}</div>
                <div class="characters__origin">
                    From: {{ item.origin.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import FavoriteIcon from '@/icons/FavoriteIcon.vue'
import { useCharacters } from '@/use/useCharacters'

const props = defineProps(['item'])
const characters = useCharacters(props.item)
</script>

<style lang="scss">
.characters {
    img {
        width: 300px;
        height: 300px;
    }

    &__item {
        position: relative;
    }

    &__like {
        background-color: rgb(27, 152, 161);
        padding: 3px;
        position: absolute;
        top: 0;
        right: 0;
        border-bottom-left-radius: 11px;
    }

    &__info {
    }

    &__name {
    }

    &__gender {
    }

    &__origin {
    }
}
</style>
