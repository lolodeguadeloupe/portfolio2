<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-primary">Portfolio</router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden sm:flex sm:items-center sm:space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-primary">Accueil</router-link>
          <router-link to="/projects" class="text-gray-700 hover:text-primary">Projets</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-primary">Contact</router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center sm:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link to="/" class="block px-3 py-2 text-gray-700 hover:text-primary">Accueil</router-link>
        <router-link to="/projects" class="block px-3 py-2 text-gray-700 hover:text-primary">Projets</router-link>
        <router-link to="/contact" class="block px-3 py-2 text-gray-700 hover:text-primary">Contact</router-link>
      </div>
    </div>
  </nav>
</template>