<template>
  <div 
    class="relative w-48 h-48 mx-auto"
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1 }"
    :transition="{ type: 'spring', stiffness: 100, damping: 15 }"
  >
    <div class="absolute inset-0 bg-white/20 rounded-full blur-xl transform scale-110"></div>
    
    <div class="relative w-full h-full rounded-full overflow-hidden border-4 border-white/80 shadow-xl">
      <img
        src="/images/avatar.webp"
        alt="Photo de profil"
        class="w-full h-full object-cover"
      />
    </div>
    
    <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-white/30 rounded-full blur-sm"></div>
  </div>
</template>