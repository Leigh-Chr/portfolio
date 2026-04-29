---
title: 'Veille Technologique'
category: 'human'
group: 'personal'
level: 8
icon: 'magnifying-glass'
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

## En bref

Dans le développement web, ce qui est à la pointe aujourd'hui sera la norme demain et obsolète après-demain. Je fais de la veille non pas pour cocher une case, mais parce que j'en ai besoin pour prendre les bonnes décisions techniques dans mes projets.

Ma veille ne se limite pas à lire des newsletters : j'expérimente les technos qui m'intéressent sur des projets perso, j'évalue si elles sont assez mûres pour de la production, et je les intègre quand ça fait sens.

## En pratique

### Adoption précoce de Svelte 5

Lors de la refonte de **[Syren V4](/projects/syren-platform)** et **[Luce V4](/projects/luce-platform)**, j'ai proposé et défendu le choix de migrer d'Angular vers Svelte 5, alors que le framework venait tout juste de sortir. Cette décision s'appuyait sur plusieurs mois de veille : suivi des RFC, tests des versions beta, analyse des retours de la communauté. Le pari a payé : les perfs sont meilleures et le code est plus agréable à maintenir. J'ai aussi poussé Paraglide.js (Inlang) pour l'internationalisation, qui s'est avéré bien plus ergonomique que les approches classiques type i18next.

### Exploration de Tauri et Rust

Pour mon projet personnel **[Tidy App](/projects/tidy-app)**, j'ai choisi Tauri 2.0 plutôt qu'Electron après un benchmark approfondi. Cette décision m'a amené à apprendre Rust pour les parties natives de l'application. Le résultat : une application desktop de 15 Mo au lieu de 150 Mo, et des performances bien supérieures. Ça m'a aussi poussé hors de ma zone de confort JavaScript/TypeScript pour apprendre Rust — pas le chemin le plus facile, mais le bon pour ce cas d'usage.

### Intégration des LLMs

Toujours sur **[Tidy App](/projects/tidy-app)**, j'ai intégré des modèles de langage (Ollama en local, OpenAI en distant) pour la suggestion intelligente de noms de fichiers. Ça m'a demandé de comprendre les APIs des LLMs, d'optimiser les prompts, et de gérer les contraintes de latence et de coût — des compétences qui se sont révélées utiles bien au-delà de ce projet.
