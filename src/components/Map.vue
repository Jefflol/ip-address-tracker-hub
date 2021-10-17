<template>
<div id="mapid"></div>  
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue'
import { useGeolocation } from '../store/store.js'

export default defineComponent({
    name: 'Map',
    setup() {
        const map = ref(null)
        const { geolocation, loading } = useGeolocation()

        const mapTile = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: import.meta.env.VITE_ACCESS_TOKEN
        })

        onMounted(() => {
            map.value = L.map('mapid')
        })

        watch(loading, (oldState, newState) => {
            if (!oldState && newState) {
                map.value.setView(geolocation.value.latlng, 13)
                mapTile.addTo(map.value)
            }
        })
    },
})
</script>

<style scoped>
#mapid {
    height: 100%;
}
</style>