/**
 * CV Configuration
 * Centralized data for the CV page - edit here to update the CV
 */

interface ContactInfo {
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
  location: string;
}

interface Availability {
  available: boolean;
  types: string[]; // e.g., ['CDI', 'CDD']
  locations: string[]; // e.g., ['Remote', 'Grenoble']
}

interface ProfileInfo {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
}

interface LanguageInfo {
  name: string;
  level: string;
}

export const profile: ProfileInfo = {
  name: 'Virgil CHAREYRE',
  title: 'Développeur Web Fullstack',
  subtitle: '',
  summary: `Développeur Web Fullstack, 3 ans d'alternance chez BH Technologies. TypeScript, Svelte, React, Node.js, NestJS, PostgreSQL. Attaché à l'accessibilité et au code bien fait. Je cherche une équipe où le travail rime avec éthique et transparence.`,
};

export const contact: ContactInfo = {
  email: 'virgil.07@hotmail.fr',
  linkedin: 'https://linkedin.com/in/virgil-chareyre',
  linkedinDisplay: 'linkedin.com/in/virgil-chareyre',
  github: 'https://github.com/Leigh-Chr',
  githubDisplay: 'github.com/Leigh-Chr',
  location: 'Grenoble, France',
};

export const availability: Availability = {
  available: true,
  types: ['CDI', 'CDD'],
  locations: ['Remote', 'Grenoble'],
};

export const languages: LanguageInfo[] = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Professionnel (B2)' },
];

export const techStack: string[] = [
  'TypeScript',
  'JavaScript',
  'React',
  'Svelte / SvelteKit',
  'Angular',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'REST API',
  'WebSockets',
  'Docker',
  'Git',
  'Tailwind CSS',
  'Tauri',
];
