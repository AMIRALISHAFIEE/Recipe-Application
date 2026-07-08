<template>
    <div class="single-recipe">
        <NuxtLink to="/">
            <BaseButton text="← Back to Recipes" />
        </NuxtLink>
        <h1 class="single-recipe__name">{{ data.name }}</h1>
        <recipe-details :calory="data?.caloriesPerServing" :star="data?.rating" :time="data?.cookTimeMinutes" />
        <hr>
        <NuxtImg class="single-recipe__img" :src="data?.image" />
        <h4 class="single-recipe__details">Ingredients</h4>
        <div class="single-recipe__ingredients">
            <BaseCheckbox v-for="(item, index) in data?.ingredients" :key="index" :label="item" />
        </div>
        <h4 class="single-recipe__details">Instructions</h4>
        <div class="single-recipe__instructions"> 
            <recipe-step v-for="(item, index) in data?.instructions" :key="index" :number="index+=1" :text="item" /> 
        </div>
    </div> 
</template>
<script setup>
import { getRecipe } from '~/API/recipe.js'
const route = useRoute()
const id = route.params.id
const { data } = await getRecipe(id)
useHead({
    title: data.name
})
</script>
<style scoped>
.single-recipe {
    padding: 50px 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    width: 100%;
}

.single-recipe__name {
    font-size: clamp(1.75rem, 5vw, 2.75rem);
    margin-bottom: 20px;
    color: #000;
    word-wrap: break-word;
}

.single-recipe__img {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
    border-radius: 5px;
    margin-top: 20px;
}

.single-recipe__details {
    font-size: clamp(1.25rem, 3vw, 1.875rem);
    margin-top: 45px;
}

.single-recipe__ingredients {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 20px 0px;
    gap: 15px;
}

.single-recipe__instructions {
    width: 100%;
    display: flex;
    margin: 20px 0px;
    flex-direction: column;
}

.ingredient-item {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8px;
}

.ingredient-item label {
    color: #000;
    font-size: 1.25rem;
}

@media (max-width: 768px) {
    .single-recipe {
        padding: 30px 15px;
    }

    .single-recipe__img {
        max-height: 300px;
    }

    .single-recipe__details {
        margin-top: 30px;
    }
}

@media (max-width: 480px) {
    .single-recipe {
        padding: 20px 10px;
    }

    .single-recipe__img {
        max-height: 200px;
    }
}
</style>