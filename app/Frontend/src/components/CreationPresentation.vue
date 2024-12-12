<template>
    <div class="page-accueil">
        <h1>Page d'accueil</h1>

        <!-- Section Mes Présentations -->
        <section class="mes-presentations">
            <h2>Mes Présentations</h2>
            <div class="presentation-grid">
                <!-- Ajouter une présentation -->
                <div class="add-presentation" @click="addPresentation">
                    <button>Ajouter</button>
                </div>
                <!-- Liste des présentations -->
                <div v-on:click="GoToCreationSlide(router)" v-for="(presentation, index) in presentations" :key="index"
                    class="presentation-card">
                    <h3>{{ presentation.title }}</h3>
                    <div class="icons">
                        <div v-for="(icon, idx) in presentation.icons" :key="idx" class="icon">
                            {{ icon }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Résultat Présentation Rejointe -->
        <section class="resultat">
            <h2>Résultat de la présentation rejointe</h2>
            <div class="presentation-card">
                <h3>{{ joinedPresentation.title }}</h3>
                <div class="icons">
                    <div v-for="(icon, index) in joinedPresentation.icons" :key="index" class="icon">
                        {{ icon }}
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { GoToHome, GoToLogin, GoToCreationSlide, GoToVotingPage, GoToCreationPresentation } from "../Helper/GoToRoad.js"


export default {
    setup() {
        const router = useRouter();

        // Liste des présentations
        const presentations = ref([
            { title: "présentation1", icons: ["Globale", "Google Chrome", "Teams"] },
            { title: "présentation2", icons: ["Teams", "Chrome", "Edge"] },
        ]);

        // Présentation rejointe
        const joinedPresentation = ref({
            title: "Zibzab",
            icons: ["Globale", "Google Chrome", "Teams"],
        });

        // Fonction pour ajouter une présentation
        const addPresentation = () => {
            presentations.value.push({
                title: `présentation${presentations.value.length + 1}`,
                icons: ["Nouveau"],
            });
        };

        return {
            presentations,
            joinedPresentation,
            addPresentation,
            GoToHome,
            GoToLogin,
            GoToCreationSlide,
            GoToVotingPage,
            GoToCreationPresentation,
            router
        };
    },
};
</script>

<style scoped>
/* Styles de la page principale */
.page-accueil {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #d6eaf8;
}

h1,
h2 {
    text-align: center;
}

/* Section Mes Présentations */
.mes-presentations,
.resultat {
    margin: 20px 0;
}

.resultat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.presentation-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

/* Carte des présentations */
.presentation-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 120px;
    text-align: center;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.icons {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
}

.icon {
    background-color: #f7f9f9;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 12px;
}

/* Bouton Ajouter */
.add-presentation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 2px dashed #bbb;
    border-radius: 8px;
    cursor: pointer;
}

button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style>