<template>
  <hero-section /> 
  <RecipeList  :recipes="data.recipes"/>
</template>
<script setup>
import { getRecipes } from '~/API/recipes';
import HeroSection from '~/components/home/heroSection.vue';
const { data } = await getRecipes()  
useSeoMeta({
  title: "Recipe app"
})
</script>