---
title: 'API REST / Architecture'
category: 'technical'
group: 'backend'
level: 7
icon: '🔧'
order: 5
relatedProjects:
  ['syren-platform', 'luce-platform', 'appstandard', 'tidy-app', 'cahnon', 'transit-display-hub']
summary: "Conception d'APIs RESTful bien structurées et compréhension des principes d'architecture logicielle."
publishedDate: '2026-01-20'
modifiedDate: '2026-02-20'
---

## Ma Définition

J'ai appris à concevoir des APIs REST en entreprise avec NestJS, puis j'ai creusé le sujet sur mes projets perso. Côté méthode, je m'attache aux conventions REST : bons verbes HTTP, codes de statut parlants, nommage cohérent des ressources, versioning. Swagger/OpenAPI pour la doc, c'est systématique — une API sans doc, c'est une API que personne n'a envie d'intégrer.

## Mes éléments de preuve

### APIs NestJS chez BH Technologies

Sur les plateformes **[Syren](/projects/syren-platform)** et **[Luce](/projects/luce-platform)**, j'ai contribué au développement d'APIs RESTful avec NestJS. J'ai travaillé sur les modules de gestion des conteneurs, des lightnodes, des scénarios et des plannings. L'architecture en couches (contrôleurs, services, repositories) et l'authentification JWT faisaient partie des standards de l'équipe. La documentation Swagger était générée automatiquement pour faciliter l'intégration avec les applications frontend.

### Architecture monorepo sur AppStandard

Sur **[AppStandard](/projects/appstandard)**, j'ai conçu une architecture complète avec 19 packages partagés. La séparation claire entre la logique métier (parsers RFC), les APIs (endpoints REST), et l'interface utilisateur (React) permet une maintenance facilitée et une réutilisation maximale du code. Les packages NPM sont publiés et réutilisables par la communauté.

### CI/CD et conteneurisation

Sur **[AppStandard](/projects/appstandard)** et **[Tidy App](/projects/tidy-app)**, j'ai mis en place des pipelines CI/CD avec GitHub Actions et des déploiements conteneurisés avec Docker pour que n'importe qui puisse self-host facilement.

## Mon autocritique

Ma compréhension de l'architecture logicielle s'est construite au fil des projets. Je connais bien les patterns classiques (MVC, couches, injection de dépendances) et je commence à explorer des approches comme le DDD et l'event sourcing.

## Mon évolution dans cette compétence

Prochaine étape : aller plus loin en architecture logicielle — DDD, CQRS, event sourcing, microservices. C'est vers là que je veux aller pour gérer des applications plus ambitieuses.

## Réalisations associées

- [Plateforme Syren](/projects/syren-platform) - APIs NestJS, documentation Swagger
- [Plateforme Luce](/projects/luce-platform) - Architecture microservices
- [AppStandard](/projects/appstandard) - Monorepo 19 packages, CI/CD
- [Tidy App](/projects/tidy-app) - Architecture Tauri, APIs internes
- [Cahnon](/projects/cahnon) - Architecture IPC Tauri v2, 20 modules de commandes Rust
- [Transit Display Hub](/projects/transit-display-hub) - API REST 10 contrôleurs, WebSocket STOMP, DDD
