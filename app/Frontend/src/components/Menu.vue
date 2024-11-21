<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { GoToHome, GoToLogin, GoToCreationSlide, GoToVotingPage } from "../Helper/GoToRoad.js"

const route = useRoute();
const router = useRouter();

const props = defineProps({
    showExtraItems: Boolean, // Déclarez une prop nommée 'showExtraItems' de type Boolean
});

const showExtraItems = computed(() => {
    // À changer
  return route.name === 'Home'; // Exemple : afficher sur la page d'accueil
});
</script>

<template>
    <nav class="header">
        <button v-on:click="GoToHome(router)">Home</button>
        <button v-on:click="GoToLogin(router)">Login</button>
        <button v-if="showExtraItems" v-on:click="GoToCreationSlide(router)">Create Slide</button>
    </nav>
</template>

<style>
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
        justify-content: center;
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
