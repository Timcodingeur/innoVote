<script setup>
</script>

<template>
    <div class="container">
        <h1 class="title">Entrez l'ID de la session</h1>
        <div class="input-container">
            <input id="CodeSession" type="text" placeholder="Code de la session">
            <button class="submit-button">Valider</button>
        </div>
    </div>
</template>

<style scoped>
/* Conteneur principal */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(145deg, #4A148C, #7E57C2);
    font-family: 'Arial', sans-serif;
}

/* Titre */
.title {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
}

/* Conteneur pour l'input et le bouton */
.input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

/* Input de texte */
#CodeSession {
    width: 250px;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 2px solid #D1C4E9;
    border-radius: 8px;
    font-size: 1rem;
    text-align: center;
    outline: none;
    transition: border-color 0.3s ease-in-out;
}

#CodeSession:focus {
    border-color: #7E57C2;
}

/* Bouton Valider */
.submit-button {
    background-color: #7E57C2;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.2s;
}

.submit-button:hover {
    background-color: #4A148C;
    transform: scale(1.05);
}
</style>
