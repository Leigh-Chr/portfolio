---
title: 'Bases de données SQL / NoSQL'
category: 'technical'
group: 'backend'
level: 6
icon: '🗄️'
order: 4
relatedProjects: ['syren-platform', 'luce-platform', 'appstandard', 'cahnon']
summary: 'Conception et optimisation de bases de données relationnelles et NoSQL adaptées aux besoins de chaque projet.'
---

## Ma Définition

La gestion des données est au cœur des plateformes IoT que je développe chez BH Technologies. PostgreSQL 16 et 17 (2023-2024) ont apporté des améliorations significatives en termes de parallélisation des requêtes et de gestion du JSON, renforçant sa position de base de données relationnelle de référence. Parallèlement, l'essor des bases vectorielles (pgvector) pour l'IA générative et des solutions edge computing transforment le paysage du stockage de données. Les capteurs de déchets et les luminaires connectés génèrent un volume important de données qu'il faut stocker, interroger et analyser efficacement. Le choix entre SQL et NoSQL dépend toujours du cas d'usage : cohérence ACID vs flexibilité, requêtes complexes vs performance en lecture, schéma fixe vs évolutif.

## Mes éléments de preuve

### PostgreSQL pour les plateformes Syren et Luce

En SQL, je travaille principalement avec PostgreSQL pour les données structurées sur **[Syren](/projects/syren-platform)** et **[Luce](/projects/luce-platform)** : utilisateurs, configurations, historiques de mesures. Je maîtrise la conception de schémas normalisés, l'écriture de requêtes optimisées avec jointures et agrégations, et l'utilisation d'index pour améliorer les performances. Les migrations de base de données avec TypeORM font partie de mon quotidien pour faire évoluer les schémas de manière contrôlée.

### Redis et MongoDB pour les besoins spécifiques

Le NoSQL trouve sa place pour les données moins structurées ou les besoins de flexibilité : logs, événements, données de capteurs brutes avec MongoDB. J'utilise également Redis pour le caching et la gestion de sessions, permettant d'améliorer les temps de réponse des APIs.

### Architecture multi-domaine sur AppStandard

Mon projet personnel **[AppStandard](/projects/appstandard)** pousse cette expertise plus loin avec une architecture de base de données multi-domaine (Calendar, Tasks, Contacts). Chaque domaine a son propre schéma optimisé, tout en partageant des tables communes pour les utilisateurs et l'authentification.

## Mon autocritique

Je maîtrise les bases de données relationnelles et les cas d'usage courants du NoSQL. J'ai une bonne compréhension des compromis entre les différentes solutions et je sais choisir l'outil adapté au besoin.

Mon conseil : toujours penser aux migrations dès le début. Un schéma de base de données évolue, et les migrations doivent être réversibles et testées.

## Mon évolution dans cette compétence

Je souhaite approfondir les aspects avancés : réplication, sharding, optimisation de requêtes complexes, et bases de données orientées time-series pour les données IoT.

## Réalisations associées

- [Plateforme Syren](/projects/syren-platform) - PostgreSQL, données capteurs IoT
- [Plateforme Luce](/projects/luce-platform) - PostgreSQL, historiques de mesures
- [AppStandard](/projects/appstandard) - Architecture multi-domaine PostgreSQL
- [Cahnon](/projects/cahnon) - SQLite embarqué, 25+ tables, relations N:M
