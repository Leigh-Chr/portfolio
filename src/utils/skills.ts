/**
 * Configuration des groupes de compétences
 */
export const skillGroups = {
  frontend: {
    label: 'Développement Frontend',
    color: 'primary', // cyan/blue
    icon: '🎨',
    description: 'Interfaces utilisateur modernes et réactives',
  },
  backend: {
    label: 'Développement Backend',
    color: 'secondary', // purple
    icon: '⚙️',
    description: 'APIs, bases de données et architecture',
  },
  personal: {
    label: 'Compétences Personnelles',
    color: 'accent', // yellow/orange
    icon: '🧠',
    description: 'Apprentissage, analyse et adaptation',
  },
  interpersonal: {
    label: 'Compétences Interpersonnelles',
    color: 'tertiary', // pink/rose
    icon: '🤝',
    description: 'Communication et collaboration',
  },
} as const;

export type SkillGroup = keyof typeof skillGroups;

/**
 * Calcule la moyenne des niveaux d'un groupe de compétences
 */
export function getGroupAverageLevel(skills: { data: { level: number } }[]): number {
  if (skills.length === 0) return 0;
  const sum = skills.reduce((acc, skill) => acc + skill.data.level, 0);
  return Math.round(sum / skills.length);
}
