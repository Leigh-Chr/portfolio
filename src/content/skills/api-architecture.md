---
title: 'API REST / Architecture'
category: 'technical'
group: 'backend'
level: 7
icon: '🔧'
order: 5
relatedProjects: ['syren-platform', 'luce-platform', 'appstandard', 'tidy-app']
summary: "Conception d'APIs RESTful bien structurées et compréhension des principes d'architecture logicielle."
---

## Ma Définition

La conception d'APIs REST de qualité est une compétence que j'ai développée à la fois en entreprise et sur mes projets personnels. Une bonne API doit être intuitive, cohérente et bien documentée pour faciliter son utilisation par les autres développeurs et les applications clientes.

Je m'attache à respecter les conventions REST : utilisation appropriée des verbes HTTP (GET, POST, PUT, DELETE), codes de statut significatifs, ressources nommées au pluriel, et versioning de l'API. La documentation automatique avec Swagger/OpenAPI fait partie intégrante de mon processus de développement.

## Mes éléments de preuve

### APIs NestJS chez BH Technologies

Sur les plateformes **Syren** et **Luce**, j'ai contribué au développement d'APIs RESTful avec NestJS. J'ai travaillé sur les modules de gestion des conteneurs, des lightnodes, des scénarios et des plannings. L'architecture en couches (contrôleurs, services, repositories) et l'authentification JWT faisaient partie des standards de l'équipe. La documentation Swagger était générée automatiquement pour faciliter l'intégration avec les applications frontend.

### Architecture monorepo sur AppStandard

Sur **AppStandard**, j'ai conçu une architecture complète avec 19 packages partagés. La séparation claire entre la logique métier (parsers RFC), les APIs (endpoints REST), et l'interface utilisateur (React) permet une maintenance facilitée et une réutilisation maximale du code. Les packages NPM sont publiés et réutilisables par la communauté.

### CI/CD et conteneurisation

Sur mes projets personnels **AppStandard** et **Tidy App**, j'ai mis en place des pipelines CI/CD avec GitHub Actions et des déploiements conteneurisés avec Docker, permettant un self-hosting facile.

## Mon autocritique

Ma compréhension de l'architecture logicielle s'est construite progressivement. Je maîtrise les patterns classiques (MVC, couches, injection de dépendances) mais je souhaite approfondir les architectures plus avancées comme le DDD ou l'event sourcing.

## Mon évolution dans cette compétence

Je souhaite approfondir mes connaissances en architecture logicielle : patterns DDD, CQRS, event sourcing, et microservices. Ces approches sont pertinentes pour des applications à grande échelle.

## Réalisations associées

- [Plateforme Syren](/projects/syren-platform) - APIs NestJS, documentation Swagger
- [Plateforme Luce](/projects/luce-platform) - Architecture microservices
- [AppStandard](/projects/appstandard) - Monorepo 19 packages, CI/CD
- [Tidy App](/projects/tidy-app) - Architecture Tauri, APIs internes
