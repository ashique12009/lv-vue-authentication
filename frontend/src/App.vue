<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from '@/views/Nav.vue';
</script>

<template>
  <header>
    <Nav />
  </header>

  <RouterView />
</template>

<style scoped>
</style>