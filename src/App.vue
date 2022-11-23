<template>
    <div class="wrapper">
        <the-header></the-header>
        <div class="main">
            <div class="container">
                <router-view />
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style lang="scss">
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: rgb(37, 37, 37);
    color: white;
    min-height: 100vh;
    width: 100%;
    height: 100vh;
}

.wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main {
	flex: 1 1 auto;
	margin-bottom: 40px;
}

.container {
    padding: 0 15px;
    margin: 0 auto;
}
</style>
