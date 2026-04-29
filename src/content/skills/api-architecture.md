---
title: 'API REST / Architecture'
category: 'technical'
group: 'backend'
level: 7
icon: 'wrench'
order: 5
relatedProjects:
  ['syren-platform', 'luce-platform', 'appstandard', 'tidy-app', 'cahnon', 'transit-display-hub']
summary: "Conception d'APIs RESTful bien structurées et compréhension des principes d'architecture logicielle."
publishedDate: '2026-01-20'
modifiedDate: '2026-02-20'
---

## En bref

J'ai appris à concevoir des APIs REST en entreprise avec NestJS, puis j'ai creusé le sujet sur mes projets perso. Côté méthode, je m'attache aux conventions REST : bons verbes HTTP, codes de statut parlants, nommage cohérent des ressources, versioning. Swagger/OpenAPI pour la doc, c'est systématique — une API sans doc, c'est une API que personne n'a envie d'intégrer.

## En pratique

### APIs NestJS chez BH Technologies

Sur les plateformes **[Syren](/projects/syren-platform)** et **[Luce](/projects/luce-platform)**, j'ai contribué au développement d'APIs RESTful avec NestJS. J'ai travaillé sur les modules de gestion des conteneurs, des lightnodes, des scénarios et des plannings. L'architecture en couches (contrôleurs, services, repositories) et l'authentification JWT faisaient partie des standards de l'équipe. La documentation Swagger était générée automatiquement pour faciliter l'intégration avec les applications frontend.

### Architecture monorepo sur AppStandard

Sur **[AppStandard](/projects/appstandard)**, j'ai conçu une architecture complète avec 19 packages partagés. La séparation claire entre la logique métier (parsers RFC), les APIs (endpoints REST), et l'interface utilisateur (React) permet une maintenance facilitée et une réutilisation maximale du code. Les packages NPM sont publiés et réutilisables par la communauté.

### CI/CD et conteneurisation

Sur **[AppStandard](/projects/appstandard)** et **[Tidy App](/projects/tidy-app)**, j'ai mis en place des pipelines CI/CD avec GitHub Actions et des déploiements conteneurisés avec Docker pour que n'importe qui puisse self-host facilement.
