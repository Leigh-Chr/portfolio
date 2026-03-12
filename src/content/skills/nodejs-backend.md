---
title: 'Backend Node.js'
category: 'technical'
group: 'backend'
level: 7
icon: '🖥️'
order: 3
relatedProjects: ['syren-platform', 'luce-platform', 'appstandard', 'tidy-app']
summary: "Développement d'APIs et de services backend robustes avec l'écosystème Node.js (NestJS, Express, Hono)."
publishedDate: '2026-01-20'
modifiedDate: '2026-02-20'
---

## Ma Définition

NestJS, c'est mon quotidien pour les APIs des plateformes Syren et Luce. Ce que j'apprécie dans ce framework, c'est la structure qu'il impose : modules, contrôleurs, services, guards — chaque chose à sa place. Ça donne des backends maintenables et testables, surtout quand plusieurs développeurs travaillent sur le même projet.

## Mes éléments de preuve

### Refonte microservices de Luce V3

L'API monolithique de **[Luce V3](/projects/luce-platform)** devenait difficile à maintenir avec l'équipe grandissante. J'ai participé à la refonte en microservices NestJS : conception de l'API de gestion des points lumineux (lightnodes), mise en place des scénarios et plannings, et documentation Swagger automatique. Résultat concret : temps de déploiement divisé par 3, chaque équipe autonome sur son service, et une API documentée automatiquement.

### WebSockets temps réel pour l'IoT

Je travaille avec les WebSockets (Socket.IO) pour les fonctionnalités temps réel de nos plateformes IoT : mise à jour des statuts de capteurs, alertes en temps réel, synchronisation des données cartographiques. Sur des applications de supervision comme **[Syren](/projects/syren-platform)** et **[Luce](/projects/luce-platform)**, c'est indispensable.

### Bonnes pratiques et qualité

Dans mes projets, j'implémente des APIs RESTful en suivant les bonnes pratiques : validation des entrées avec class-validator, documentation automatique avec Swagger, gestion des erreurs centralisée, et authentification JWT. L'intégration native de TypeScript et la décoration par annotations rendent le code expressif et auto-documenté.

## Mon autocritique

NestJS est le framework backend où je suis le plus à l'aise. Je connais bien les concepts avancés (guards, interceptors, pipes) et je suis productif vite sur n'importe quel projet NestJS.

Ma formation m'a aussi fait toucher à Spring Boot et Java, ce qui aide à prendre du recul sur les patterns communs aux frameworks backend d'entreprise.

Un truc que je fais systématiquement : mettre en place Swagger dès le début. Une API bien documentée évite les allers-retours entre front et back, et tout le monde y gagne.

## Mon évolution dans cette compétence

La suite pour moi : creuser CQRS avec NestJS, l'event sourcing, et les architectures microservices avec message brokers (RabbitMQ, Kafka). Mes projets perso me servent aussi de terrain de jeu pour tester des alternatives comme Hono ou Elysia.

## Réalisations associées

- [Plateforme Syren](/projects/syren-platform) - APIs NestJS, WebSockets temps réel
- [Plateforme Luce](/projects/luce-platform) - Refonte microservices, gestion lightnodes
- [AppStandard](/projects/appstandard) - Backend Node.js, APIs REST
- [Tidy App](/projects/tidy-app) - Backend avec Tauri/Rust
