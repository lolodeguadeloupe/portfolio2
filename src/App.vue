<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <div class="min-h-screen">
    <TheNavbar />
    <router-view />
  </div>
</template>