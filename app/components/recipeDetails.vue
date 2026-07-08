<template>
    <div class="recipe-details">
        <div class="detail">
            <Icon name="mdi:clock-time-eight-outline" class="detail__icon" />
            <span>{{ props?.time }}</span>
        </div>
        <div class="detail">
            <Icon name="mdi:fire" class="detail__icon" />
            <span>{{ props?.calory }}</span>
        </div>
        <div class="detail">
            <Icon name="mdi:star" class="detail__icon" />
            <span>{{ props?.star }}</span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    time: {
        type: Number,
        required: true
    },
    calory: {
        type: Number,
        required: true
    },
    star: {
        type: Number,
        required: true
    }
})
</script>
<style scoped>
.detail {
    display: flex;
    align-items: center;
    gap: 5px;
}

.detail__icon {
    color: var(--primary-color);
}

.recipe-details {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
    font-size: clamp(0.875rem, 1.5vw, 1.25rem);
    color: #000;
    gap: clamp(15px, 3vw, 40px);
    flex-wrap: wrap;
}
</style>