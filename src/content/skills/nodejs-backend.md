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

## En bref

NestJS, c'est mon quotidien pour les APIs des plateformes Syren et Luce. Ce que j'apprécie dans ce framework, c'est la structure qu'il impose : modules, contrôleurs, services, guards — chaque chose à sa place. Ça donne des backends maintenables et testables, surtout quand plusieurs développeurs travaillent sur le même projet.

## En pratique

### Refonte microservices de Luce V3

L'API monolithique de **[Luce V3](/projects/luce-platform)** devenait difficile à maintenir avec l'équipe grandissante. J'ai participé à la refonte en microservices NestJS : conception de l'API de gestion des points lumineux (lightnodes), mise en place des scénarios et plannings, et documentation Swagger automatique. Résultat concret : temps de déploiement divisé par 3, chaque équipe autonome sur son service, et une API documentée automatiquement.

### WebSockets temps réel pour l'IoT

Je travaille avec les WebSockets (Socket.IO) pour les fonctionnalités temps réel de nos plateformes IoT : mise à jour des statuts de capteurs, alertes en temps réel, synchronisation des données cartographiques. Sur des applications de supervision comme **[Syren](/projects/syren-platform)** et **[Luce](/projects/luce-platform)**, c'est indispensable.

### Bonnes pratiques et qualité

Dans mes projets, j'implémente des APIs RESTful en suivant les bonnes pratiques : validation des entrées avec class-validator, documentation automatique avec Swagger, gestion des erreurs centralisée, et authentification JWT. L'intégration native de TypeScript et la décoration par annotations rendent le code expressif et auto-documenté.
