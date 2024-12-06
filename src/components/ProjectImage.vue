<template>
  <div 
    class="w-full h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden"
  >
    <img 
      :src="props.src"
      :alt="props.alt"
      class="w-full h-full object-cover"
      @error="handleImageError"
      ref="imageRef"
    />
    <div 
      v-if="showFallback"
      class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
    >
      <div class="text-center text-white">
        <div class="text-4xl font-bold mb-2">{{ props.title }}</div>
        <div class="flex gap-2 justify-center">
          <span 
            v-for="tech in mainTechnologies"
            :key="tech"
            class="px-2 py-1 bg-white/10 rounded text-sm backdrop-blur-sm"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  src: string
  alt: string
  title: string
  technologies: string[]
}>()

const imageRef = ref<HTMLImageElement | null>(null)
const showFallback = ref(false)

const mainTechnologies = computed(() => {
  return props.technologies.slice(0, 3)
})

const handleImageError = () => {
  showFallback.value = true
}
</script>
