<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Menu from './components/Menu.vue';

const route = useRoute();

const showMenu = computed(() => {
  return route.meta.showMenu !== false;
});
</script>

<template>
  <header class="header">
    <div>
      <Menu v-if="showMenu"></Menu>
    </div>
  </header>
  <router-view></router-view>
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
