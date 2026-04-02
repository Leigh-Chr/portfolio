---
title: 'Frameworks Frontend'
category: 'technical'
group: 'frontend'
level: 8
icon: '⚛️'
order: 2
relatedProjects:
  ['syren-platform', 'luce-platform', 'appstandard', 'tidy-app', 'cahnon', 'transit-display-hub']
summary: "Développement d'interfaces utilisateur modernes avec les principaux frameworks du marché : React, Angular, Svelte et Vue."
publishedDate: '2026-01-20'
modifiedDate: '2026-02-20'
---

## En bref

Plutôt que de me spécialiser sur un seul framework, j'ai préféré en pratiquer plusieurs sérieusement : React pour sa flexibilité, Angular pour les grosses apps structurées, Svelte pour la performance, Vue quand la courbe d'apprentissage de l'équipe compte. Sur chacun, je connais les patterns avancés (state management, routing, SSR/SSG) et surtout les compromis qui dictent le choix d'un outil plutôt qu'un autre dans un contexte donné.

## En pratique

### React 19 sur AppStandard (216k lignes)

Mon projet personnel **[AppStandard](/projects/appstandard)** est entièrement développé en React 19 avec une architecture moderne : Server Components, hooks personnalisés, et un design system partagé entre trois applications (Calendar, Tasks, Contacts). Gérer un projet React de cette taille m'a obligé à être rigoureux sur la structure et les conventions dès le départ.

### Migration Angular 14 → Svelte 5 (Syren et Luce)

Chez BH Technologies, j'ai participé activement à la migration de **[Syren V4](/projects/syren-platform)** et **[Luce V4](/projects/luce-platform)** d'Angular 14 vers SvelteKit 2 avec Svelte 5. Cette migration impliquait de repenser les patterns (RxJS vers stores Svelte, services vers modules), tout en conservant les fonctionnalités existantes. Au final, les pages chargent plus vite et le code est plus agréable à maintenir.

### Optimisation Angular et accessibilité (Syren V3)

Sur **[Syren V3](/projects/syren-platform)**, j'ai optimisé la carte temps-réel qui était lente avec de gros volumes de conteneurs. J'ai refactorisé le composant avec lazy loading, virtualisation des marqueurs et optimisation de la change detection Angular. J'ai également ajouté les attributs ARIA appropriés pour l'accessibilité. Le temps de rendu a nettement baissé et on a atteint la conformité WCAG 2.1 AA.
