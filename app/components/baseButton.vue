<template>
    <button>{{ text }}</button>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Button'
    }
})
</script>
<style scoped>
button {
    background-color: var(--primary-color);
    color: white;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
    outline: none;
    border: none;
}

button :focus {
    outline: none;
}
</style>