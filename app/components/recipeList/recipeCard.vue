<template>
    <div class="recipe-card">
        <NuxtImg :src="recipe?.image" />
        <div class="card-body">
            <p class="recipe-name">{{ recipe?.name }}</p>
            <recipe-details :calory="recipe?.caloriesPerServing" :star="recipe?.rating" :time="recipe?.cookTimeMinutes"/>
            <NuxtLink :to="{
                path: `/recipe/${recipe.id}`
            }">
                <base-button text="View" />
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>  
const prop = defineProps({
    recipe: {
        required: true
    }
}) 
</script>
<style scoped>
.recipe-card {
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.recipe-card img {
    width: 100%;
    object-fit: contain;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.recipe-card .recipe-name {
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 400;
    margin: 0px;
}

.card-body {
    padding: 15px;
}

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