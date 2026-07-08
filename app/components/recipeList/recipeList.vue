<template>
    <div class="recipe-list">
        <div class="recipe-list__header">
            <h3>Discover, Create, Share</h3>
            <p>Check out our most popular recipes!</p>
        </div>
        <div class="recipe-list__body">
            <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </div>
    </div>
</template>
<script setup>
import RecipeCard from '~/components/recipeList/recipeCard.vue';

const prop = defineProps({
    recipes: {
        required: true
    }
}) 
</script>
<style scoped>
.recipe-list {
    padding: clamp(40px, 5vw, 80px) clamp(15px, 5vw, 80px);
}

.recipe-list__header h3 {
    font-size: clamp(1.75rem, 4vw, 3rem);
    margin-bottom: 10px;
    color: #000;
}

.recipe-list__body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px 15px;
}

.recipe-list__header p {
    font-size: clamp(1rem, 2vw, 1.4rem);
}

.recipe-list__header {
    margin-bottom: clamp(25px, 4vw, 45px);
}

@media (max-width: 1024px) {
    .recipe-list__body {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 767px) {
    .recipe-list__body {
        grid-template-columns: 1fr;
    }
}
 
</style>