<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../lib/supabase'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  
  if (loading.value) return // Évite les soumissions multiples
  
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''
  
  try {
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name: form.value.name,
          email: form.value.email,
          message: form.value.message,
          status: 'new'
        }
      ])

    if (error) throw error

    successMessage.value = 'Message envoyé avec succès !'
    form.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (error: any) {
    console.error('Erreur:', error)
    errorMessage.value = error?.message || 'Une erreur est survenue lors de l\'envoi du message.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="section-container">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Me Contacter</h2>

      <div v-if="successMessage" class="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
        {{ successMessage }}
      </div>

      <div v-if="errorMessage" class="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
        {{ errorMessage }}
      </div>

      <form @submit="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            :disabled="loading"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-100"
            required
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            :disabled="loading"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-100"
            required
          />
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            :disabled="loading"
            rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-100"
            required
          ></textarea>
        </div>
        
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="inline-flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </span>
            <span v-else>Envoyer le Message</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.section-container {
  @apply py-16 px-4 sm:px-6 lg:px-8;
}

/* Animation du spinner */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>