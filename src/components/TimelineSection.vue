<script setup lang="ts">
import { timelineItems } from '../data/timeline'
</script>

<template>
  <section class="section-container" id="experience">
    <h2 
      class="text-3xl font-bold text-center mb-12"
      v-motion
      :initial="{ y: 50, opacity: 0 }"
      :enter="{ y: 0, opacity: 1 }"
      :transition="{ duration: 500 }"
    >
      Expérience
    </h2>
    <div class="relative">
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
      
      <div class="space-y-12">
        <div 
          v-for="(item, index) in timelineItems" 
          :key="index"
          class="relative"
          v-motion
          :initial="{ 
            x: index % 2 === 0 ? 100 : -100, 
            opacity: 0 
          }"
          :enter="{ 
            x: 0, 
            opacity: 1 
          }"
          :transition="{ 
            delay: index * 200,
            duration: 800,
            type: 'spring'
          }"
        >
          <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
          
          <div 
            :class="[
              'w-5/12',
              index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8 text-right'
            ]"
          >
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <span class="text-sm text-primary font-semibold">{{ item.date }}</span>
              <h3 class="text-xl font-bold mt-1">{{ item.title }}</h3>
              <p class="text-gray-500 mt-1">{{ item.entreprise }} - {{ item.location }}</p>
              <p class="text-gray-600 mt-2">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2 mt-3" :class="{ 'justify-end': index % 2 === 0 }">
                <span 
                  v-for="(tech, techIndex) in item.technologies" 
                  :key="techIndex"
                  class="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>