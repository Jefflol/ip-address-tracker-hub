<template>
<div class="details">
    <DetailsItem name="IP Address" value="192.212.174.101" />
    <DetailsItem name="Location" value="Brooklyn, NY 10001" />
    <DetailsItem name="Timezone" value="UTC-05:00" />
    <DetailsItem name="ISP" value="SpaceX Starlink" />
</div>
</template>

<script>
import { defineComponent } from 'vue'

import DetailsItem from './DetailsItem.vue'

export default defineComponent({
    name: 'Details',
    components: {
        DetailsItem
    },
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