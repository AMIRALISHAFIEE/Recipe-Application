<template>
    <div class="recipe-step">
        <div class="recipe-step__number">{{ porps.number }}</div>
        <p>{{ porps.text }}</p>
    </div>
</template>
<script setup>
const porps = defineProps({
    number: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>
<style scoped>
.recipe-step {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 5px;
    padding: 10px; 
    border-radius: 8px;
}

.recipe-step__number {
    min-width: 32px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary-color);

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 14px;
    font-weight: bold;
    flex-shrink: 0;
}

@media (max-width: 480px) {
    .recipe-step {
        gap: 8px;
        padding: 8px;
    }

    .recipe-step__number {
        min-width: 28px;
        width: 28px;
        height: 28px;
        font-size: 12px;
    }
}
</style>