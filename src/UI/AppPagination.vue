<template>
    <ul class="pagination flex gap-5 justify-center flex-wrap mb-10">
        <li class="pagination-item btn-pag">
            <button
                type="button"
                @click="onClickFirstPage"
                :disabled="isInFirstPage"
            >
                First
            </button>
        </li>

        <li class="pagination-item btn-pag">
            <button
                type="button"
                @click="onClickPreviousPage"
                :disabled="isInFirstPage"
            >
                Previous
            </button>
        </li>

        <li v-for="page in pages" :key="page.name" class="pagination-item">
            <button
                class="page-pag"
                type="button"
                :disabled="page.isDisabled"
                @click="onClickPage(page.name)"
                :class="{
                    active: isPageActive(page.name),
                }"
            >
                {{ page.name }}
            </button>
        </li>

        <li class="pagination-item btn-pag">
            <button
                type="button"
                @click="onClickNextPage"
                :disabled="isInLastPage"
            >
                Next
            </button>
        </li>

        <li class="pagination-item btn-pag">
            <button
                type="button"
                @click="onClickLastPage"
                :disabled="isInLastPage"
            >
                Last
            </button>
        </li>
    </ul>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['pagechanged'])
const props = defineProps({
    maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3,
    },
    totalPages: {
        type: Number,
        required: true,
    },
    currentPage: {
        type: Number,
        required: true,
    },
})

const onClickFirstPage = () => {
    emit('pagechanged', 1)
}
const onClickPreviousPage = () => {
    emit('pagechanged', props.currentPage - 1)
}
const onClickPage = (page) => {
    emit('pagechanged', page)
}
const onClickNextPage = () => {
    emit('pagechanged', props.currentPage + 1)
}
const onClickLastPage = () => {
    emit('pagechanged', props.totalPages)
}
const isPageActive = (page) => {
    return props.currentPage === page
}

const isInFirstPage = computed(() => {
    return props.currentPage === 1
})

const isInLastPage = computed(() => {
    return props.currentPage === props.totalPages
})

const startPage = computed(() => {
    if (props.currentPage === 1) {
        return 1
    }

    if (props.currentPage === props.totalPages) {
        return props.totalPages - props.maxVisibleButtons
    }

    return props.currentPage - 1
})

const pages = computed(() => {
    const range = []

    for (
        let i = startPage.value;
        i <=
        Math.min(
            startPage.value + props.maxVisibleButtons - 1,
            props.totalPages
        );
        i++
    ) {
        range.push({
            name: i,
            isDisabled: i === props.currentPage,
        })
    }

    return range
})
</script>

<style lang="scss" scoped>
button {
    padding: 0 10px;
    background-color: #0b0720;
}

button:disabled {
    background-color: rgb(124, 124, 124);
    cursor: no-drop;
}

.pagination {
    list-style-type: none;
}

.pagination-item {
    display: inline-block;
}

.active {
    background-color: rgb(27, 152, 161) !important;
    color: #ffffff;
}

.page-pag {
}
</style>
