<template>
    <header>
        <div>
            <NuxtLink to="/">
                <h3>Home</h3>
            </NuxtLink>
        </div>
    </header>
</template>
<style scoped>
header {
    width: 100%;
    padding-block: 10px;
    padding-inline: clamp(15px, 5vw, 50px);
}

header h3 {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    text-decoration: none;
}

@media (max-width: 480px) {
    header h3 {
        font-size: 1.125rem;
    }
}
</style>