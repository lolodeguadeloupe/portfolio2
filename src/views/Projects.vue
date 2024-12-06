<template>
  <div class="section-container py-16" id="projects">
    <h2 
      class="text-3xl font-bold text-center mb-12"
      v-motion
      :initial="{ y: 50, opacity: 0 }"
      :enter="{ y: 0, opacity: 1 }"
      :transition="{ duration: 500 }"
    >
      Mes Projets
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
        v-motion
        :initial="{ y: 50, opacity: 0 }"
        :enter="{ y: 0, opacity: 1 }"
        :transition="{ delay: index * 200 }"
      >
        <ProjectImage
          :src="project.image"
          :alt="'Aperçu de ' + project.title"
          :title="project.title"
          :technologies="project.technologies"
        />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="(tech, techIndex) in project.technologies" 
              :key="techIndex"
              class="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              {{ tech }}
            </span>
          </div>
          <div class="flex space-x-4">
            <a 
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Voir sur GitHub
            </a>
            <a 
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Voir la démo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '../data/projects'
import ProjectImage from '../components/ProjectImage.vue'
</script>