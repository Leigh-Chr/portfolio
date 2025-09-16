# Système de composants

## 🏗️ Architecture Atomic Design

Le projet suit la méthodologie **Atomic Design** pour une organisation logique et maintenable des composants.

## 📦 Structure des composants

### **Atoms** (8 composants)
Composants de base réutilisables sans logique métier complexe.

- `button.astro` - Boutons avec variants (primary, secondary, outline)
- `cursor-trail.astro` - Effet de traînée de curseur personnalisé avec états interactifs
- `icon-hybrid.astro` - Système d'icônes intelligent (local/CDN)
- `icon-local.astro` - Icônes depuis fichiers locaux `/public/assets/icons/`
- `icon-svg.astro` - Icônes depuis CDN Heroicons avec fallback
- `icon.astro` - Icônes inline définies en TypeScript
- `scroll-animator.astro` - Animations au scroll avec Intersection Observer
- `tag.astro` - Tags/étiquettes pour compétences

### **Molecules** (5 composants)
Combinaisons d'atomes avec logique simple.

- `contact-info.astro` - Informations de contact structurées
- `logo.astro` - Logo avec portrait professionnel
- `project-card.astro` - Cartes de projets avec effets hover uniformes
- `skill-card.astro` - Cartes de compétences avec niveaux
- `social-links.astro` - Liens vers réseaux sociaux

### **Organisms** (3 composants)
Sections complexes composées de molécules et atomes.

- `header.astro` - En-tête avec navigation responsive
- `navigation.astro` - Navigation principale (desktop/mobile)
- `timeline.astro` - Timeline du parcours professionnel

### **Templates** (1 composant)
Composants de niveau supérieur et utilitaires.

- `seo.astro` - Gestion complète du SEO et métadonnées Open Graph

## 🎯 Principes de composition

### Règles de dépendances
```
Atoms → Molecules → Organisms → Templates → Pages
```

- Chaque niveau peut utiliser tous les niveaux inférieurs
- Aucune dépendance circulaire
- Import via alias `@/components/`

### Exemple d'utilisation
```astro
---
import Button from "@/components/atoms/button.astro";
import ProjectCard from "@/components/molecules/project-card.astro";
---

<ProjectCard id="syren-v3" title="Syren V3" summary="..." />
<Button variant="primary" href="/contact">Me contacter</Button>
```

## ⚡ Fonctionnalités avancées

### Effets uniformes
Les cartes et boutons utilisent des effets uniformes et subtils pour un style cohérent :

```css
/* Effets hover uniformes */
.card:hover { 
  transform: translate3d(0, -4px, 0) scale(1.02); 
}
.social-link:hover { 
  transform: translate3d(0, -4px, 0) scale(1.1) rotate(3deg); 
}
```

### Système d'icônes hybride
Le projet utilise un système d'icônes intelligent à trois niveaux :

- **Icônes inline** (`icon.astro`) : SVG simples définis en TypeScript pour contacts
- **Icônes locales** (`icon-local.astro`) : Technologies depuis `/public/assets/icons/`
- **Icônes CDN** (`icon-svg.astro`) : Heroicons depuis CDN avec chargement asynchrone
- **Composant hybride** (`icon-hybrid.astro`) : Détection automatique local/CDN

```typescript
// Détection automatique dans icon-hybrid.astro
const localIcons = ["angular", "svelte", "nest", "typescript", "postgresql"];
const useLocal = isLocal || localIcons.includes(name);
```

### Animations intelligentes au scroll
Le composant `ScrollAnimator` utilise l'Intersection Observer pour des animations performantes :

```typescript
// Système de priorités d'animation
getAnimationPriority(element: HTMLElement): number {
  if (animationType === "punk-zoom") return 1;        // Titres
  if (element.classList.contains("section")) return 3; // Sections
  return 6; // Défaut
}
```

### Cursor Trail interactif
Traînée de curseur avec états dynamiques :
- **Hover** : Agrandissement sur éléments interactifs
- **Pressed** : Contraction lors du clic
- **Drag** : Étirement pendant le glisser-déposer
- **Persistance** : Position sauvegardée entre les pages

### Animations respectueuses
Toutes les animations respectent `prefers-reduced-motion` :

```css
@media (prefers-reduced-motion: reduce) {
  .hero__tagline {
    animation: none;
    text-shadow: 3px 3px 0px var(--color-disabled);
  }
}
```

## 🧹 Optimisations réalisées

### Suppression des wrappers inutiles
- ❌ `Container.astro` → Classe CSS `.container`
- ❌ `PageHeader.astro` → Inliné dans les pages
- ❌ `NavigationLink.astro` → Inliné dans `Navigation.astro`
- ❌ `Hero.astro` → Inliné dans `index.astro`
- ❌ `hamburger-menu.astro` → Inliné dans `Navigation.astro`
- ❌ `mobile-menu-controller.astro` → JavaScript intégré

### Résultat
- **-13 composants** supprimés (réduction de 52%)
- Architecture ultra-simplifiée
- Moins de couplage
- Performance maximale

## 📱 Responsive design

Tous les composants sont responsive avec des breakpoints intelligents :

```css
/* Mobile-first approach */
@media (max-width: 767px) {
  .nav--desktop { display: none; }
  .hamburger { display: flex; }
}

@media (max-width: 480px) {
  .card { padding: var(--space-md); }
}
```

---

**Références** :
- [Architecture générale](architecture-generale.md)
- [Gestion des données](gestion-donnees.md)
