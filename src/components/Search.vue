<template>
<div class="search">
    <input type="text" v-model="search" placeholder="Search for any IP address or domain" />
    <button type="submit" @click="searchIp">
        <img src="../assets/icon-arrow.svg" alt="Search" />
    </button>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useIp, useGeolocation } from '../store/store.js'

export default defineComponent({
    name: 'Search',
    setup() {
        const search = ref('')
        const { setIp } = useIp()
        const { loadGeolocationDetails } = useGeolocation()

        const searchIp = () => {
            setIp(search.value)
            loadGeolocationDetails()
        }

        return {
            search,
            searchIp
        }
    }
})
</script>

<style scoped>
.search {
    display: flex;
    width: 260px;
    height: 50px;
    margin: 20px 0;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.05);
}

.search > input {
    flex-grow: 1;
    width: 210px;
    margin: 0;
    border: 0;
    padding: 0 16px 0 16px;
    font-family: 'Rubik';
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;
}

.search > input:hover {
    filter: brightness(0.95)
}

.search > button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    width: 50px;
    height: 100%;
    margin: 0;
    border: 0;
    background-color: hsl(0, 0%, 17%);
}

.search > button:hover {
    filter: brightness(0.85)
}

.search > button:active {
    filter: brightness(0.7)
}

@media only screen and (min-width: 375px) {
    .search {
        min-width: 40%;
    }
}

@media only screen and (min-width: 1200px) {
    .search {
        min-width: 0;
        width: 100%;
        max-width: 400px;
    }
}
</style>