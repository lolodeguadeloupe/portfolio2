interface TimelineItem {
  date: string;
  title: string;
  description: string;
  entreprise: string;
  location: string;
  technologies: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    date: 'févr. 2023 - avr. 2023',
    title: 'Développeur Fullstack',
    entreprise: 'ORANGE',
    location: 'Blagnac',
    description: 'Transformation d\'applications PHP héritées en solutions modernes avec Vue.js et Nuxt.js pour le front-end, et GraphQL avec Laravel pour le back-end. Amélioration de l\'expérience utilisateur et de la performance des applications web.',
    technologies: ['PHP', 'Vue.js', 'Nuxt.js', 'GraphQL', 'Laravel']
  },
  {
    date: 'oct. 2022 - janv. 2023',
    title: 'Développeur Fullstack',
    entreprise: 'TECH VALLEY',
    location: 'Toulouse',
    description: 'Débogage et optimisation d\'applications web Laravel. Réalisation d\'évolutions de code et maintenance applicative avec focus sur la performance.',
    technologies: ['Laravel', 'PHP']
  },
  {
    date: 'juil. 2019 - sept. 2022',
    title: 'Ingénieur d\'Études',
    entreprise: 'SNCF',
    location: 'Saint-Denis',
    description: 'Création d\'une application web avec base PostgreSQL pour remplacer des outils Microsoft Access existants. Migration complète des données et implémentation avec Laravel.',
    technologies: ['PostgreSQL', 'Laravel', 'PHP', 'Microsoft Access']
  },
  {
    date: 'févr. 2019 - juin 2019',
    title: 'Ingénieur d\'Études',
    entreprise: 'Assu2000',
    location: 'Noisy-le-sec',
    description: 'Maintenance d\'un intranet sous framework PHP propriétaire et étude de migration vers Laravel ou Symfony4.',
    technologies: ['PHP', 'Laravel', 'Symfony']
  },
  {
    date: 'janv. 2017 - janv. 2019',
    title: 'Ingénieur d\'Études',
    entreprise: 'Freelance',
    location: 'Saint-Mandé',
    description: 'Développement de sites WordPress, notamment des plateformes e-commerce avec WooCommerce, marketplace de vente de repas et site de crowdfunding.',
    technologies: ['WordPress', 'WooCommerce', 'PHP']
  },
  {
    date: 'févr. 2015 - févr. 2017',
    title: 'Expert TYPO3',
    entreprise: 'Thomascook',
    location: 'Paris',
    description: 'Pilotage de projets de développement avancés sous TYPO3, garantissant des solutions performantes et innovantes.',
    technologies: ['TYPO3', 'PHP']
  },
  {
    date: 'avr. 2014 - déc. 2014',
    title: 'Ingénieur d\'Études',
    entreprise: 'Dassault Systèmes',
    location: 'Velizy-Villacoublay',
    description: 'Développement d\'une application de gestion de traduction.',
    technologies: ['PHP']
  },
  {
    date: 'févr. 2013 - avr. 2014',
    title: 'Expert TYPO3',
    entreprise: 'Klesia',
    location: 'Paris',
    description: 'Migration d\'un intranet TYPO3 de la version 4.5 vers 6.0, correction de bugs et évolution du site.',
    technologies: ['TYPO3', 'PHP']
  },
  {
    date: 'sept. 2010 - avr. 2011',
    title: 'Expert TYPO3',
    entreprise: 'Peugeot PSA',
    location: 'Asnières sur Seine',
    description: 'Développement d\'un intranet international multilingue et développement de plugins spécifiques.',
    technologies: ['TYPO3', 'PHP']
  }
];