/**
 * Configuration des groupes de compétences.
 * `iconName` réfère à un nom valide du composant `Icon.astro`.
 */
export const skillGroups = {
  frontend: {
    label: 'Développement Frontend',
    color: 'primary', // cyan/blue
    iconName: 'palette',
    description: 'Interfaces utilisateur modernes et réactives',
  },
  backend: {
    label: 'Développement Backend',
    color: 'secondary', // purple
    iconName: 'gear',
    description: 'APIs, bases de données et architecture',
  },
  personal: {
    label: 'Compétences Personnelles',
    color: 'accent', // yellow/orange
    iconName: 'brain',
    description: 'Apprentissage, analyse et adaptation',
  },
  interpersonal: {
    label: 'Compétences Interpersonnelles',
    color: 'tertiary', // pink/rose
    iconName: 'users',
    description: 'Communication et collaboration',
  },
} as const;

export type SkillGroup = keyof typeof skillGroups;

/**
 * Convertit un niveau numérique (1-10) en label narratif.
 * Le numérique reste utilisé en interne pour les calculs (radar, largeur de barre),
 * mais l'affichage public privilégie le qualitatif.
 */
export function levelToText(level: number): string {
  if (level >= 8) return 'Confirmé';
  if (level >= 6) return 'Avancé';
  if (level >= 4) return 'Intermédiaire';
  return 'Débutant';
}
