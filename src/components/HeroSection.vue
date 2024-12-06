<script setup lang="ts">
import ProfileImage from './ProfileImage.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToProjects = () => {
  router.push('/projects')
}
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
    
    <div class="section-container relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div 
          class="mb-12"
          v-motion
          :initial="{ scale: 0, opacity: 0 }"
          :enter="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 800, type: 'spring' }"
        >
          <ProfileImage />
        </div>
        
        <h1 
          class="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight"
          v-motion
          :initial="{ y: 100, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ delay: 200 }"
        >
          Développeur Créatif
          <span 
            class="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-50"
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :enter="{ x: 0, opacity: 1 }"
            :transition="{ delay: 400 }"
          >
            Construisant des Expériences Digitales
          </span>
        </h1>
        
        <p 
          class="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ delay: 600 }"
        >
          Passionné par la création d'applications web innovantes et performantes
          utilisant les technologies les plus modernes
        </p>
        
        <div 
          class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ delay: 800 }"
        >
          <button 
            @click="goToProjects" 
            class="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Voir Mes Projets
          </button>
          <router-link 
            to="/contact" 
            class="px-8 py-3 bg-indigo-900/30 text-white rounded-full font-semibold hover:bg-indigo-900/40 transition-all duration-200 backdrop-blur-sm"
          >
            Me Contacter
          </router-link>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
  </section>
</template>