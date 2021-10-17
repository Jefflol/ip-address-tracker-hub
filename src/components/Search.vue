<template>
<div class="search" :class="{ invalid: !isValid }" >
    <input type="text" v-model="search" placeholder="Search for any IP address or domain" />
    <button type="submit" @click="searchIpify">
        <img src="../assets/icon-arrow.svg" alt="Search" />
    </button>
</div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useIpify, useGeolocation } from '../store/store.js'

export default defineComponent({
    name: 'Search',
    setup() {
        const isValid = ref(true)
        const search = ref('')
        const { setIpify } = useIpify()
        const { loadGeolocationDetails } = useGeolocation()

        const searchIpify = async () => {
            setIpify(search.value)
            isValid.value = await loadGeolocationDetails()
        }

        watch(search, () => {
            isValid.value = true
        })

        return {
            isValid,
            search,
            searchIpify
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
    pointer-events: all;
}

.search > input {
    flex-grow: 1;
    width: 210px;
    margin: 0;
    border: 0;
    border-radius: 15px 0 0 15px;
    padding: 0 16px 0 16px;
    font-family: 'Rubik';
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
}

.search > input:hover {
    filter: brightness(0.98)
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

    .search > input {
        font-size: 16px;
    }
}

.search.invalid {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate(0, 0, 0);
}
.search.invalid > input {
    border: 2px solid rgba(239, 68, 68, 1);
}

@keyframes shake {
  10%, 90% {
    transform: translate(-1px, 0);
  }
  
  20%, 80% {
    transform: translate(2px, 0);
  }

  30%, 50%, 70% {
    transform: translate(-4px, 0);
  }

  40%, 60% {
    transform: translate(4px, 0);
  }
}
</style>