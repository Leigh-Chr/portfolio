---
title: 'Backend Node.js'
category: 'technical'
group: 'backend'
level: 7
icon: '🖥️'
order: 3
relatedProjects: ['syren-platform', 'luce-platform', 'appstandard', 'tidy-app']
summary: "Développement d'APIs et de services backend robustes avec l'écosystème Node.js (NestJS, Express, Hono)."
---

## Ma Définition

NestJS est le framework que j'utilise quotidiennement pour développer les APIs des plateformes Syren et Luce. Son architecture modulaire inspirée d'Angular, combinée à la puissance de Node.js, permet de construire des backends maintenables et testables. J'apprécie particulièrement la structure qu'impose NestJS : les modules, les contrôleurs, les services et les guards créent une séparation claire des responsabilités.

## Mes éléments de preuve

### Refonte microservices de Luce V3

L'API monolithique de Luce V3 devenait difficile à maintenir avec l'équipe grandissante. J'ai participé à la refonte en microservices NestJS : conception de l'API de gestion des points lumineux (lightnodes), mise en place des scénarios et plannings, et documentation Swagger automatique. Résultat : temps de déploiement divisé par 3, équipes autonomes sur leurs services, et API auto-documentée.

### WebSockets temps réel pour l'IoT

Je travaille avec les WebSockets (Socket.IO) pour les fonctionnalités temps réel de nos plateformes IoT : mise à jour des statuts de capteurs, alertes en temps réel, synchronisation des données cartographiques. Cette expertise est essentielle pour des applications de supervision comme Syren et Luce.

### Bonnes pratiques et qualité

Dans mes projets, j'implémente des APIs RESTful en suivant les bonnes pratiques : validation des entrées avec class-validator, documentation automatique avec Swagger, gestion des erreurs centralisée, et authentification JWT. L'intégration native de TypeScript et la décoration par annotations rendent le code expressif et auto-documenté.

## Mon autocritique

NestJS est mon framework backend de prédilection. Je maîtrise ses concepts avancés (guards, interceptors, pipes) et je peux être productif rapidement sur n'importe quel projet NestJS.

Ma formation m'a aussi initié à Spring Boot et Java, ce qui me donne une vision plus large des architectures backend d'entreprise et me permet de comprendre les patterns communs.

Mon conseil : investir dans la documentation Swagger dès le début. Une API bien documentée facilite l'intégration frontend et réduit les allers-retours entre équipes.

## Mon évolution dans cette compétence

Je souhaite approfondir les patterns avancés : CQRS avec NestJS, event sourcing, et les architectures microservices avec message brokers (RabbitMQ, Kafka). Mes projets personnels me permettent aussi d'explorer des alternatives comme Hono ou Elysia.

## Réalisations associées

- [Plateforme Syren](/projects/syren-platform) - APIs NestJS, WebSockets temps réel
- [Plateforme Luce](/projects/luce-platform) - Refonte microservices, gestion lightnodes
- [AppStandard](/projects/appstandard) - Backend Node.js, APIs REST
- [Tidy App](/projects/tidy-app) - Backend avec Tauri/Rust
