---
title: 'Bases de données SQL / NoSQL'
category: 'technical'
group: 'backend'
level: 6
icon: '🗄️'
order: 4
relatedProjects: ['syren-platform', 'luce-platform', 'appstandard', 'cahnon', 'transit-display-hub']
summary: 'Conception et optimisation de bases de données relationnelles et NoSQL adaptées aux besoins de chaque projet.'
publishedDate: '2026-01-20'
modifiedDate: '2026-02-20'
---

## Ma Définition

Chez BH Technologies, les capteurs de déchets et les luminaires connectés génèrent des volumes de données conséquents qu'il faut stocker, interroger et analyser sans que ça rame. C'est sur ces problématiques concrètes que j'ai construit ma pratique des bases de données. Le choix entre SQL et NoSQL dépend toujours du cas d'usage : cohérence ACID vs flexibilité, requêtes complexes vs performance en lecture, schéma fixe vs évolutif.

## Mes éléments de preuve

### PostgreSQL pour les plateformes Syren et Luce

En SQL, je travaille principalement avec PostgreSQL pour les données structurées sur **[Syren](/projects/syren-platform)** et **[Luce](/projects/luce-platform)** : utilisateurs, configurations, historiques de mesures. Je sais concevoir des schémas normalisés, écrire des requêtes optimisées (jointures, agrégations), et poser les bons index. Les migrations TypeORM, c'est routinier : faire évoluer les schémas sans casser la prod.

### Redis et MongoDB pour les besoins spécifiques

Le NoSQL trouve sa place pour les données moins structurées ou les besoins de flexibilité : logs, événements, données de capteurs brutes avec MongoDB. J'utilise également Redis pour le caching et la gestion de sessions, ce qui améliore les temps de réponse des APIs.

### Architecture multi-domaine sur AppStandard

Mon projet personnel **[AppStandard](/projects/appstandard)** pousse cette expertise plus loin avec une architecture de base de données multi-domaine (Calendar, Tasks, Contacts). Chaque domaine a son propre schéma optimisé, tout en partageant des tables communes pour les utilisateurs et l'authentification.

## Mon autocritique

Je suis à l'aise avec le relationnel et les cas courants du NoSQL. Je sais peser les compromis entre les différentes solutions et choisir l'outil qui colle au besoin.

Un truc que j'ai appris à la dure : penser aux migrations dès le départ. Un schéma évolue toujours, et les migrations doivent être réversibles et testées — sinon on le paye cher plus tard.

## Mon évolution dans cette compétence

Là où je veux progresser : réplication, sharding, optimisation de requêtes complexes, et bases time-series pour les données IoT.

## Réalisations associées

- [Plateforme Syren](/projects/syren-platform) - PostgreSQL, données capteurs IoT
- [Plateforme Luce](/projects/luce-platform) - PostgreSQL, historiques de mesures
- [AppStandard](/projects/appstandard) - Architecture multi-domaine PostgreSQL
- [Cahnon](/projects/cahnon) - SQLite embarqué, 25+ tables, relations N:M
- [Transit Display Hub](/projects/transit-display-hub) - PostgreSQL, Flyway migrations, JPA/Hibernate
