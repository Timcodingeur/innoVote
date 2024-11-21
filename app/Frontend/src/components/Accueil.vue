<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();
</script>

<template>
    <header>
        <h1>rien a voir ici</h1>
        <h1>C'est la page d'accueil</h1>
    </header>

    <main>
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>