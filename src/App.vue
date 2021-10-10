<template>
<div class="background">
    <img class="background-banner" src="./assets/pattern-bg.png" alt="Banner" />
</div>
<div class="content">
    <h1 class="title">IP Address Tracker</h1>
    <Search />
    <Details />
</div>
</template>

<script>
import { defineComponent } from 'vue'

import Search from './components/Search.vue'
import Details from './components/Details.vue'

export default defineComponent({
    name: 'App',
    components: {
        Search,
        Details
    },
})
</script>

<style>
body {
    margin: 0;
}

#app {
    font-family: 'Rubik'
}

.background {
    width: 100%;
}

.background-banner {
    height: 100%;
}

.title {
    color: white;
    font-weight: 500;
    font-size: 24px;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 5%;
}

@media only screen and (min-width: 375px) {
    .title {
        font-size: 32px;
    }
}

@media only screen and (min-width: 1440px) {
    .background-banner {
        width: 100%;
    }
}
</style>
