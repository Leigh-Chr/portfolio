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
---

## Ma Définition

Plutôt que de me spécialiser sur un seul framework, j'ai préféré en pratiquer plusieurs sérieusement : React pour sa flexibilité, Angular pour les grosses apps structurées, Svelte pour la performance, Vue quand la courbe d'apprentissage de l'équipe compte. Sur chacun, je connais les patterns avancés (state management, routing, SSR/SSG) et surtout les compromis qui dictent le choix d'un outil plutôt qu'un autre dans un contexte donné.

## Mes éléments de preuve

### React 19 sur AppStandard (216k lignes)

Mon projet personnel **[AppStandard](/projects/appstandard)** est entièrement développé en React 19 avec une architecture moderne : Server Components, hooks personnalisés, et un design system partagé entre trois applications (Calendar, Tasks, Contacts). Gérer un projet React de cette taille m'a obligé à être rigoureux sur la structure et les conventions dès le départ.

### Migration Angular 14 → Svelte 5 (Syren et Luce)

Chez BH Technologies, j'ai participé activement à la migration de **[Syren V4](/projects/syren-platform)** et **[Luce V4](/projects/luce-platform)** d'Angular 14 vers SvelteKit 2 avec Svelte 5. Cette migration impliquait de repenser les patterns (RxJS vers stores Svelte, services vers modules), tout en conservant les fonctionnalités existantes. Au final, les pages chargent plus vite et le code est plus agréable à maintenir.

### Optimisation Angular et accessibilité (Syren V3)

Sur **[Syren V3](/projects/syren-platform)**, j'ai optimisé la carte temps-réel qui était lente avec de gros volumes de conteneurs. J'ai refactorisé le composant avec lazy loading, virtualisation des marqueurs et optimisation de la change detection Angular. J'ai également ajouté les attributs ARIA appropriés pour l'accessibilité. Le temps de rendu a nettement baissé et on a atteint la conformité WCAG 2.1 AA.

## Mon autocritique

Connaître plusieurs frameworks me permet d'être productif vite quelle que soit la stack d'une équipe, parce que les concepts de fond sont les mêmes : composants, réactivité, gestion d'état, cycle de vie.

Angular m'a appris la rigueur architecturale, React la flexibilité, et Svelte m'a montré qu'on peut faire plus simple et plus rapide. Chacun a ses forces ; en avoir pratiqué plusieurs, c'est surtout mieux comprendre les fondamentaux qui ne changent pas d'un framework à l'autre.

## Mon évolution dans cette compétence

Ce que je veux creuser ensuite : les Server Components (React/Next.js), le système de runes de Svelte 5 plus en profondeur, et les architectures hybrides SSR/SSG. Je garde aussi un œil sur Solid.js, qui apporte des idées intéressantes.

## Réalisations associées

- [Plateforme Syren](/projects/syren-platform) - Migration Angular 14 → Svelte 5, cartographie Mapbox
- [Plateforme Luce](/projects/luce-platform) - Design system SvelteKit, interfaces de supervision
- [AppStandard](/projects/appstandard) - React 19, architecture moderne, 216k+ lignes
- [Tidy App](/projects/tidy-app) - Interface desktop avec Tauri, UI TypeScript moderne
- [Cahnon](/projects/cahnon) - Svelte 5 runes, TipTap/ProseMirror, 51 composants
- [Transit Display Hub](/projects/transit-display-hub) - Angular 21 Signals, Material, standalone components
