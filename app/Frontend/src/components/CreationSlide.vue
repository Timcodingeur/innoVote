<script setup>
// Ajoutez des fonctionnalités interactives si nécessaire
</script>

<template>
  <div class="section">
    <h1>Page d'accueil</h1>
  </div>
  <div class="section">
    <h1>Mes présentations</h1>
    <div class="presentations">
      <div class="presentation add-presentation">
        <div class="add-icon"></div>
        <h4>Ajouter</h4>
      </div>
      <div class="presentation">
        <div class="color-blue"></div>
        <h4>Presentation1</h4>
      </div>
      <div class="presentation">
        <div class="color-blue"></div>
        <h4>InnoVote</h4>
      </div>
    </div>
  </div>
  <div class="section">
    <h1>Résultat des présentations</h1>
    <div class="presentations">
      <div class="presentation">
        <div class="color-blue"></div>
        <h4>ZibZab</h4>
      </div>
      <div class="presentation">
        <div class="color-blue"></div>
        <h4>InnoVote</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ajout d'un espacement visible au-dessus de chaque section */
.section {
  margin: 20px 0; /* Ajout d'une marge sur le haut et le bas */
  padding-top: 20px; /* Ajout d'un espace intérieur pour forcer le décalage */
}

/* Autres styles pour maintenir l'affichage propre */
.presentations {
  display: flex;
  gap: 10px;
}

.presentation {
  padding: 1%;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  margin-left: 1%;
}

.add-presentation {
  background-color: #f9f9f9;
  cursor: pointer;
}

.color-blue {
  width: 50px;
  height: 50px;
  background-color: #007bff;
  margin: 0 auto;
  border-radius: 50%;
}

.add-icon {
  width: 50px;
  height: 50px;
  background: url('../../public/plus-svgrepo-com.svg') no-repeat center center;
  background-size: contain;
  margin: 0 auto;
}
</style>
