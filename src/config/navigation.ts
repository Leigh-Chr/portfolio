/**
 * Navigation configuration
 * Centralized navigation links used across Header and Footer components
 */

interface NavigationItem {
  name: string;
  href: string;
}

export const mainNavigation: NavigationItem[] = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Compétences', href: '/skills' },
  { name: 'Réalisations', href: '/projects' },
  { name: 'Parcours', href: '/timeline' },
  { name: 'Contact', href: '/contact' },
];
