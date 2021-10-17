<template>
<div class="background">
    <img id="banner" class="background-banner" src="./assets/pattern-bg.png" alt="Banner" />
    <div class="background-map">
        <Map />
    </div>
</div>
<div class="content">
    <h1 class="title">IP Address Tracker</h1>
    <Search />
    <Details />
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { useIpify, useGeolocation } from './store/store.js'

import Search from './components/Search.vue'
import Details from './components/Details.vue'
import Map from './components/Map.vue'


export default defineComponent({
    name: 'App',
    components: {
        Search,
        Details,
        Map
    },
    setup() {
        const { loadIpify } = useIpify()
        const { loadGeolocationDetails } = useGeolocation()
        
        loadIpify()
        loadGeolocationDetails()
    }
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
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
}

.background-banner {
    height: 20%;
}

.background-map {
    flex-grow: 1;
    box-sizing: border-box;
    z-index: 0;
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
    margin-top: min(3%, 100px);
}

@media only screen and (min-width: 375px) {
    .title {
        font-size: 32px;
    }
}

@media only screen and (min-width: 1440px) {
    .background-banner {
        width: 100%;
        height: auto;
    }
}
</style>
