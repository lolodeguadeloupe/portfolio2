interface Education {
  date: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  technologies: string[];
}

export const education: Education[] = [
  {
    date: '2016',
    title: 'Formation Continue en Technologies Web',
    institution: 'OpenClassroom et Udemy.com',
    location: 'En ligne',
    description: 'Formation continue sur les technologies web modernes pour rester à jour avec les dernières pratiques de développement.',
    technologies: ['Web Technologies']
  },
  {
    date: '2002',
    title: 'Diplôme d\'Études Supérieures et Techniques',
    institution: 'CNAM',
    location: 'Paris',
    description: 'Formation en cours du soir permettant d\'acquérir des compétences techniques avancées tout en travaillant.',
    technologies: []
  },
  {
    date: '1999',
    title: 'Formation Développement d\'Applications',
    institution: 'AFCEPF',
    location: 'Montrouge',
    description: 'Formation intensive de 9 mois en informatique et développement d\'applications.',
    technologies: ['Développement d\'applications']
  },
  {
    date: '1998',
    title: 'Maîtrise de Mathématiques',
    institution: 'UAG',
    location: 'Guadeloupe',
    description: 'Formation supérieure en mathématiques, développant des compétences analytiques et logiques.',
    technologies: ['Mathématiques']
  },
  {
    date: '1997',
    title: 'Licence de Mathématiques',
    institution: 'UAG',
    location: 'Guadeloupe',
    description: 'Formation initiale en mathématiques, posant les bases théoriques et pratiques.',
    technologies: ['Mathématiques']
  }
];