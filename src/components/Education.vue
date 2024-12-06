<template>
  <section class="py-12 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">Education</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="item in education" 
          :key="item.date" 
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
        >
          <div class="mb-4">
            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full font-medium">
                {{ item.date }}
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {{ item.location }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ item.title }}</h3>
            <p class="text-blue-600 dark:text-blue-400 font-medium mb-1">{{ item.institution }}</p>
          </div>
          <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{{ item.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in item.technologies" 
              :key="tech"
              class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education } from '@/data/education';
</script>
