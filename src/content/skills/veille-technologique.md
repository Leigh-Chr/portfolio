---
title: 'Veille Technologique'
category: 'human'
group: 'personal'
level: 8
icon: '🔍'
order: 7
relatedProjects:
  [
    'syren-platform',
    'luce-platform',
    'appstandard',
    'tidy-app',
    'site-bh-technologies',
    'cahnon',
    'transit-display-hub',
  ]
summary: 'Identifier, apprendre et adopter les technologies qui comptent pour rester à jour dans mon métier.'
publishedDate: '2026-01-20'
modifiedDate: '2026-02-20'
---

## Ma Définition

Dans le développement web, ce qui est à la pointe aujourd'hui sera la norme demain et obsolète après-demain. Je fais de la veille non pas pour cocher une case, mais parce que j'en ai besoin pour prendre les bonnes décisions techniques dans mes projets.

Ma veille ne se limite pas à lire des newsletters : j'expérimente les technos qui m'intéressent sur des projets perso, j'évalue si elles sont assez mûres pour de la production, et je les intègre quand ça fait sens.

## Mes éléments de preuve

### Adoption précoce de Svelte 5

Lors de la refonte de **[Syren V4](/projects/syren-platform)** et **[Luce V4](/projects/luce-platform)**, j'ai proposé et défendu le choix de migrer d'Angular vers Svelte 5, alors que le framework venait tout juste de sortir. Cette décision s'appuyait sur plusieurs mois de veille : suivi des RFC, tests des versions beta, analyse des retours de la communauté. Le pari a payé : les perfs sont meilleures et le code est plus agréable à maintenir. J'ai aussi poussé Paraglide.js (Inlang) pour l'internationalisation, qui s'est avéré bien plus ergonomique que les approches classiques type i18next.

### Exploration de Tauri et Rust

Pour mon projet personnel **[Tidy App](/projects/tidy-app)**, j'ai choisi Tauri 2.0 plutôt qu'Electron après un benchmark approfondi. Cette décision m'a amené à apprendre Rust pour les parties natives de l'application. Le résultat : une application desktop de 15 Mo au lieu de 150 Mo, et des performances bien supérieures. Ça m'a aussi poussé hors de ma zone de confort JavaScript/TypeScript pour apprendre Rust — pas le chemin le plus facile, mais le bon pour ce cas d'usage.

### Intégration des LLMs

Toujours sur **[Tidy App](/projects/tidy-app)**, j'ai intégré des modèles de langage (Ollama en local, OpenAI en distant) pour la suggestion intelligente de noms de fichiers. Ça m'a demandé de comprendre les APIs des LLMs, d'optimiser les prompts, et de gérer les contraintes de latence et de coût — des compétences qui se sont révélées utiles bien au-delà de ce projet.

## Mon autocritique

Je consacre du temps chaque semaine à la veille : newsletters (JavaScript Weekly, Svelte Society), conférences en ligne, et surtout des projets perso pour tester en vrai plutôt que juste lire.

Ma méthode d'apprentissage, c'est le projet pilote : je prends une techno et je construis quelque chose de concret avec. En général, ça me prend 2-3 semaines pour être opérationnel sur un nouveau framework.

Le piège à éviter : se disperser. Il vaut mieux maîtriser quelques outils que survoler des dizaines. La veille doit être ciblée sur ce qui répond à un vrai besoin, pas sur chaque nouveau repo trending sur GitHub.

## Mon évolution dans cette compétence

Les axes sur lesquels je veux aller plus loin :

- **Architecture logicielle** : patterns avancés, DDD, event sourcing
- **Intelligence artificielle** : au-delà des LLMs, comprendre les fondamentaux du ML pour mieux les intégrer
- **Performance web** : Core Web Vitals, optimisation avancée

Je maintiens cette compétence par une pratique régulière : projets personnels, participation à des meetups locaux, et expérimentation continue sur des side projects.

## Réalisations associées

- [Plateforme Syren](/projects/syren-platform) - Adoption Svelte 5, Paraglide.js
- [Plateforme Luce](/projects/luce-platform) - Migration Angular → Svelte
- [AppStandard](/projects/appstandard) - React 19, Turborepo, architecture moderne
- [Tidy App](/projects/tidy-app) - Tauri 2.0, Rust, intégration LLMs
- [Site Web BH Technologies](/projects/site-bh-technologies) - SEO technique, Google Analytics, Lighthouse
- [Cahnon](/projects/cahnon) - Tauri v2, Svelte 5 runes, Rust, TipTap/ProseMirror
- [Transit Display Hub](/projects/transit-display-hub) - Spring Boot 4, Angular 21 Signals, WebSocket STOMP
