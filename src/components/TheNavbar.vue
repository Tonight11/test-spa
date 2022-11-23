<template>
    <nav class="nav">
        <ul class="nav__body flex justify-center gap-10">
            <li>
                <router-link class="nav__link" :to="{ name: 'home' }"
                    >Characters</router-link
                >
            </li>
            <li>
                <router-link class="nav__link" :to="{ name: 'favorite' }"
                    >Favorite</router-link
                >
            </li>
        </ul>
    </nav>
</template>

<script setup></script>

<style lang="scss">
.nav__link {
    font-size: 18px;
    &.active {
        color: rgb(27, 152, 161);
    }
}
</style>
