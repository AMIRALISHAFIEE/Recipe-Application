<template>
    <section class="hero-section">
        <div class="hero-container">
            <div class="hero-section__content">
                <h1>Master the Kitchen with Ease: Unleash Your Inner Chef Today!</h1>
                <p>Discover recipes helping you to find the easiest way to cook.</p>
                <base-button text="Browse Recipes" />
            </div>
            <div class="hero-section__image-wrapper">
                <img class="hero-section__image" :src="heroImage" alt="Delicious food">
            </div>
        </div>
    </section>
</template>
<script setup>
import heroImage from "~/assets/image/hero.png" 
</script>
<style scoped>
.hero-section {
    padding: 4rem 1.5rem;
    background-color: #E5E7EB;
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
}

.hero-section__content {
    flex: 1;
    min-width: 0;
}

.hero-section__image-wrapper {
    flex: 1;
    min-width: 0;
}

.hero-section__image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 10px;
    display: block;
    margin: 0 auto;
}

.hero-section__content h1 {
    font-size: clamp(1.75rem, 4vw, 3rem);
    margin-bottom: 1.25rem;
    color: #000;
    font-weight: 400;
    line-height: 1.2;
}

.hero-section__content p {
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: #000;
    font-weight: 400;
    line-height: 1.5;
}

@media (max-width: 1024px) {
    .hero-container {
        flex-direction: column-reverse;
        text-align: center;
        gap: 2rem;
    }

    .hero-section {
        padding: 3rem 1.5rem;
    }

    .hero-section__image {
        max-width: 100%;
    }
}

@media (max-width: 640px) {
    .hero-section {
        padding: 2rem 1rem;
    }

    .hero-container {
        gap: 1.5rem;
    }

    .hero-section__image {
        max-width: 100%;
    }
}
</style>