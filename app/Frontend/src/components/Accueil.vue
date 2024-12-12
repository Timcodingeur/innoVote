<script setup>
import { useRouter } from 'vue-router';
import { GoToHome, GoToLogin, GoToCreationSlide, GoToVotingPage } from "../Helper/GoToRoad.js"

const router = useRouter();
</script>

<template>
    <div class="background-image"></div>
    <header class="header-container">
        <div class="header-content">
            <h1 class="header-title">Bienvenue sur notre plateforme</h1>
            <h2 class="header-subtitle">Créez et rejoignez des slides en toute simplicité</h2>
        </div>
    </header>

    <main>
        <section class="actions">
            <div class="action create">
                <h3>Créer un slide</h3>
                <p>Lancez votre propre présentation en quelques clics.</p>
                <button v-on:click="GoToCreationSlide(router)">Créer</button>
            </div>
            <div class="action join">
                <h3>Rejoindre une présentation</h3>
                <p>Participez à une présentation en cours avec un code d'accès.</p>
                <button v-on:click="GoToVotingPage(router)">Rejoindre</button>
            </div>
        </section>

        <section class="features">
            <h2>Fonctionnalités principales</h2>
            <ul>
                <li>Personnalisez vos slides</li>
                <li>Collaborez avec d'autres utilisateurs</li>
                <li>Accédez à des présentations dynamiques</li>
            </ul>
        </section>
    </main>
</template>

<style scoped>
/* Général */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white; /* Ajouté pour rendre le texte blanc */
}

body {
    position: relative;
    z-index: 0;
}

.background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
        ), 
        url('../../public/Fond-Acceuil.png') 
        no-repeat center center/cover;
    z-index: -1;
}

/* Header */
header {
    text-align: center;
    padding: 2rem;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

header h2 {
    font-size: 1.5rem;
    font-weight: 300;
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    background: transparent;
    text-align: center;
    color: white; /* Assurez-vous que le texte reste lisible */
}

.header-content {
    max-width: 800px;
    margin: 0 auto;
}

.header-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.header-subtitle {
    font-size: 1.8rem;
    font-weight: 300;
}

/* Section principale */
main {
    padding: 2rem;
}

/* Actions */
.actions {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
}

.action {
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    padding: 1.5rem;
    border-radius: 8px;
    width: 45%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.action h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.action p {
    margin-bottom: 1.5rem;
}

.action button {
    background: #007BFF;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

.action button:hover {
    background: #0056b3;
}

/* Features */
.features {
    text-align: center;
}

.features h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
}

.features ul {
    list-style: none;
}

.features li {
    margin: 0.5rem 0;
}

/* Responsive */
@media (min-width: 1024px) {
    .actions {
        justify-content: space-between;
    }

    .action {
        width: 30%;
    }
}
</style>