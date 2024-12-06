<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../lib/supabase'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isLoading = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const sendMessage = async () => {
  isLoading.value = true
  showSuccess.value = false
  showError.value = false

  try {
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.value.name,
          email: formData.value.email,
          message: formData.value.message,
          status: 'new'
        }
      ])

    if (error) throw error
    
    showSuccess.value = true
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (error) {
    console.error('Error sending message:', error)
    showError.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="sendMessage" class="space-y-6 max-w-xl mx-auto">
    <div v-if="showSuccess" class="p-4 bg-green-100 text-green-700 rounded-lg">
      Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
    </div>
    
    <div v-if="showError" class="p-4 bg-red-100 text-red-700 rounded-lg">
      Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.
    </div>

    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        :disabled="isLoading"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        :disabled="isLoading"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="6"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        :disabled="isLoading"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="isLoading"
    >
      <span v-if="isLoading">
        <svg class="animate-spin h-5 w-5 mr-3 inline-block" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Envoi en cours...
      </span>
      <span v-else>Envoyer le message</span>
    </button>
  </form>
</template>
