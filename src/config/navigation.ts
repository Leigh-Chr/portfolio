/**
 * Navigation configuration
 * Centralized navigation links used across Header and Footer components
 */

import { url } from '@utils/url';

interface NavigationItem {
  name: string;
  href: string;
}

export const mainNavigation: NavigationItem[] = [
  { name: 'Accueil', href: url('/') },
  { name: 'À propos', href: url('/about') },
  { name: 'Compétences', href: url('/skills') },
  { name: 'Réalisations', href: url('/projects') },
  { name: 'Parcours', href: url('/timeline') },
  { name: 'Contact', href: url('/contact') },
];
