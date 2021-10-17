<template>
<div v-if="!loading" class="details">
    <DetailsItem name="IP Address" :value="geolocation.ipAddress" />
    <DetailsItem name="Location" :value="geolocation.location" />
    <DetailsItem name="Timezone" :value="geolocation.timezone" />
    <DetailsItem name="ISP" :value="geolocation.isp" />
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { useGeolocation } from '../store/store.js'

import DetailsItem from './DetailsItem.vue'

export default defineComponent({
    name: 'Details',
    components: {
        DetailsItem
    },
    setup() {
        const { geolocation, loading } = useGeolocation()

        return {
            geolocation,
            loading
        }
    }
})
</script>

<style scoped>
.details {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 260px;
    border-radius: 15px;
    padding: 20px 0px;
    background-color: white;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.05);
}

@media only screen and (min-width: 375px) {
    .details {
        min-width: 40%;
    }
}

@media only screen and (min-width: 1200px) {
    .details {
        flex-direction: row;
        justify-content: space-between;
        width: max-content;
        padding: 30px 0;
        column-gap: 30px;
    }
}
</style>