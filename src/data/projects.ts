interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Bolt',
    description: 'Un projet de portfolio développé avec Vue 3, TypeScript et Tailwind CSS, utilisant des animations fluides et une interface utilisateur moderne.',
    image: 'https://raw.githubusercontent.com/lolodeguadeloupe/bolt/main/docs/screenshots/bolt-hero.png',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/lolodeguadeloupe/portfolio'
  },
  {
    title: 'Nuxt-Laravel',
    description: 'Une application web combinant Nuxt.js pour le front-end et Laravel pour le back-end, démontrant l\'intégration de deux frameworks puissants.',
    image: 'https://raw.githubusercontent.com/lolodeguadeloupe/nuxt-laravel/main/docs/screenshots/app.png',
    technologies: ['Nuxt.js', 'Laravel', 'PHP', 'Vue.js'],
    githubUrl: 'https://github.com/lolodeguadeloupe/nuxt-laravel'
  },
  {
    title: 'Laravel-Vue-Starter',
    description: 'Un template de démarrage pour les applications Laravel avec Vue.js, incluant l\'authentification et une structure de projet optimisée.',
    image: 'https://raw.githubusercontent.com/lolodeguadeloupe/laravel-vue-starter/main/docs/screenshots/dashboard.png',
    technologies: ['Laravel', 'Vue.js', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/lolodeguadeloupe/laravel-vue-starter'
  },
  {
    title: 'Symfony-Vue-Starter',
    description: 'Un kit de démarrage pour les applications Symfony avec Vue.js, offrant une base solide pour le développement web moderne.',
    image: 'https://raw.githubusercontent.com/lolodeguadeloupe/symfony-vue-starter/main/docs/screenshots/app.png',
    technologies: ['Symfony', 'Vue.js', 'PHP', 'Doctrine'],
    githubUrl: 'https://github.com/lolodeguadeloupe/symfony-vue-starter'
  },
  {
    title: 'Symfony-Vuetify',
    description: 'Une application web moderne combinant Symfony et Vuetify pour créer une interface utilisateur élégante et responsive.',
    image: 'https://raw.githubusercontent.com/lolodeguadeloupe/symfony-vuetify/main/docs/screenshots/app.png',
    technologies: ['Symfony', 'Vue.js', 'Vuetify', 'PHP'],
    githubUrl: 'https://github.com/lolodeguadeloupe/symfony-vuetify'
  }
];
