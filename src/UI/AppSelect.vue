<template>
    <select class="name" :value="modelValue" @input="changeOption">
        <option selected value="">All</option>
        <option v-for="item in options" :key="item" :value="item">
            {{ item }}
        </option>
    </select>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['options', 'modelValue'])
const emit = defineEmits(['update:modelValue'])
const changeOption = (event) => {
    // providing a model-value to where we call, it will work everywhere because it is a reusable component
    emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss">
.select-flex {
    display: flex;
    justify-content: right;

    select {
        display: block;
        background-color: transparent;
        color: rgb(27, 152, 161);
        font-size: 18px;
        padding: 10px 15px;
        border: 2px solid rgb(27, 152, 161);
        cursor: pointer;
    }
}
</style>
