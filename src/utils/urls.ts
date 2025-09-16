// Configuration des URLs - Utilise import.meta.env.BASE_URL pour le base path
const baseUrl = import.meta.env.BASE_URL;

// Export baseUrl pour les composants qui en ont besoin
export { baseUrl };

// Fonctions utilitaires pour construire les URLs
export const getHomeUrl = () => baseUrl;

export const getSkillUrl = (skillId: string) =>
  `${baseUrl}competences/${skillId}`;

export const getProjectUrl = (projectId: string) =>
  `${baseUrl}projets/${projectId}`;

export const getCompetencesUrl = () => `${baseUrl}competences`;

export const getProjectsUrl = () => `${baseUrl}projets`;

export const getAboutUrl = () => `${baseUrl}a-propos`;

export const getContactUrl = () => `${baseUrl}contact`;

export const getParcoursUrl = () => `${baseUrl}parcours`;

