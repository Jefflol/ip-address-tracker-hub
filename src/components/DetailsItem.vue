<template>
<div class="details__item">
    <h3>{{ name }}</h3>
    <p>{{ value }}</p>
</div>    
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DetailsItem',
    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
})
</script>

<style scoped>
.details__item {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.details__item > h3 {
    margin: 0;
    color: hsl(0, 0%, 59%);
    font-size: 10px;
    text-transform: uppercase;
}

.details__item > p {
    margin: 0;
    color: hsl(0, 0%, 17%);
    font-size: 18px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
}

@media only screen and (min-width: 1200px) {
    .details__item {
        row-gap: 10px;
        padding: 0 30px;
        text-align: left;
    }

    .details__item + .details__item {
        border-left: 1px solid hsl(0, 0%, 89%);
    }

    .details__item > h3 {
        font-size: 12px;
        font-weight: 500;
    }

    .details__item > p {        
        max-width: 240px;
        font-size: 28px;
    }
}
</style>