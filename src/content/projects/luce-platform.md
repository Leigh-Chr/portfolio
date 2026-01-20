---
title: 'Plateforme Luce'
shortDescription: "Solution de gestion et de pilotage à distance de l'éclairage public pour les villes et collectivités, avec architecture microservices et communication IoT temps réel."
thumbnail: '/images/projects/luce-thumbnail.jpg'
order: 2
relatedSkills:
  [
    'javascript-typescript',
    'frontend-frameworks',
    'nodejs-backend',
    'databases',
    'api-architecture',
    'problem-solving',
    'teamwork',
    'adaptability',
    'veille-technologique',
  ]
context:
  period: '2022 - 2025'
  role: 'Développeur Fullstack'
  company: 'BH Technologies'
---

## Présentation

Luce est une plateforme de télémanagement de l'éclairage public, composée de trois modules complémentaires : Luce App (application de supervision), Luce Connect (connectivité terrain) et LucEnergie (suivi des consommations). Elle permet aux gestionnaires des collectivités de monitorer en temps réel l'état de leurs luminaires, de programmer des scénarios d'éclairage, et de détecter automatiquement les pannes pour optimiser les interventions de maintenance.

Le système communique avec des équipements terrain (Radiolite, BH Gate) installés sur les armoires électriques et des contrôleurs (lightnodes) sur les points lumineux, via les réseaux LoRaWAN et MESH. L'architecture permet un pilotage fin de l'éclairage : variation d'intensité avec paramétrage du fading, programmation horaire avec jusqu'à 16 scènes par scénario, et réaction aux conditions de luminosité via trois modes pré-définis (Astro standard, Socio-astro éco, Socio-astro confort). La plateforme est interopérable avec le protocole standard TALQ2 ainsi qu'avec les GMAO, SIG et hyperviseurs du marché.

L'enjeu est majeur : l'éclairage public représente en moyenne **40% de la facture d'électricité** d'une commune, et la plateforme permet **jusqu'à 80% d'économies** grâce à une gestion fine de l'éclairage. BH Technologies a contribué à économiser plus de **30 millions de kWh** pour les collectivités françaises, équipant près de 50% d'entre elles.

## Objectifs, contexte, enjeu et risques

**Contexte** : Durant mon alternance chez BH Technologies, j'ai travaillé sur Luce V3 puis sur la refonte majeure Luce V4 avec une architecture microservices.

**Problématique V3** : Permettre aux collectivités de superviser et programmer leur parc d'éclairage à distance, en remplaçant la solution legacy.

**Problématique V4** : Les limites techniques de la V3 (performance, maintenabilité, scalabilité) nécessitaient une refonte complète de l'architecture vers des microservices découplés.

**Objectifs** : Diviser les temps de chargement, moderniser l'UX avec une cartographie interactive performante, et faciliter la scalabilité avec une architecture distribuée.

## Étapes – ce que j'ai fait

**Phase 1 - Luce V3 Frontend** : Refonte incrémentale du frontend Angular 14 avec amélioration progressive des modules existants. Développement de dashboards de supervision avec graphiques temps-réel (Chart.js), intégration de la cartographie Mapbox GL pour la visualisation géographique des lightnodes et armoires, et refactorisation des composants legacy.

**Phase 2 - Luce V3 Backend & Coordination** : Contribution au backend NestJS avec développement des modules Lightnode (CRUD, groupes, scénarios, plannings), Switchboard (armoires électriques, équipements), et Domain (multi-tenancy hiérarchique). Mise en place des conventions de code partagées et documentation technique des interfaces entre modules.

**Phase 3 - Luce V4 Frontend** : Migration vers SvelteKit 2 avec Svelte 5 pour le frontend. Développement de la carte interactive avec sélection de lightnodes par zone (polygon drawing tool via Mapbox Draw). Création du système de gestion des catalogues d'équipements. Intégration des rapports DALI pour le diagnostic des luminaires. Développement des interfaces de supervision avec envoi de commandes forcées (individuelles ou par groupe), programmation des scénarios avec paramétrage du fading, et gestion des groupes. Communication temps réel via Socket.IO.

**Phase 4 - Luce V4 Backend** : Contribution aux APIs NestJS pour les modules Lightnode, Switchboard et Catalog. Implémentation d'un système d'audit pour la traçabilité des actions utilisateurs. Développement des endpoints backoffice (inventaire, statistiques). Authentification JWT et gestion des permissions RBAC.

## Acteurs – les interactions

- **Équipe de développement** : Travail avec des développeurs front-end spécialisés Angular puis SvelteKit, et des développeurs back-end NestJS. Coordination multi-module et partage des bonnes pratiques sur TypeORM, RabbitMQ et les patterns NestJS.
- **Chef de projet technique** : Points quotidiens sur l'avancement, gestion des dépendances inter-modules et arbitrages techniques sur les choix d'architecture.
- **DevOps** : Collaboration sur l'infrastructure Docker, configuration des pipelines CI/CD et mise en place du monitoring (Prometheus, Grafana, Sentry).
- **Architecte technique senior** : Mentorat sur les patterns d'architecture microservices, revues d'architecture et définition des standards techniques V4 (RBAC, multi-tenancy).
- **Électriciens de collectivités pilotes** : Sessions de beta-test terrain, retours sur l'ergonomie de l'interface cartographique et validation des workflows de programmation des scénarios.
- **Équipe commerciale** : Remontées des besoins clients prioritaires et participation aux démonstrations prospects.
- **Équipe Syren** : Mutualisation de composants communs (authentification JWT, cartographie Mapbox, bibliothèques partagées) et partage d'expérience sur les migrations.

## Résultats

### Pour moi

- Maîtrise des patterns Angular 14 avancés (lazy loading, change detection, state management avec RxJS)
- Apprentissage approfondi de SvelteKit 2 et Svelte 5 avec son nouveau système de réactivité
- Expérience de migration complète Angular vers Svelte sur un projet d'envergure
- Développement d'APIs NestJS avec TypeORM et authentification JWT
- Compréhension des systèmes de permissions RBAC et multi-tenancy

### Pour l'entreprise

- Amélioration notable des temps de chargement avec la V4 grâce à SvelteKit
- Interface utilisateur modernisée et plus réactive pour les gestionnaires de collectivités
- Architecture microservices scalable permettant de gérer des parcs lumineux plus importants
- Migration progressive sans interruption de service pour les clients existants
- Base technique solide et documentée pour les évolutions futures de la plateforme

## Lendemains du projet

### Futur immédiat

- Migration des données legacy vers la nouvelle architecture
- Formation des équipes terrain sur les nouvelles interfaces SvelteKit
- Documentation technique des APIs et des interfaces utilisateur

### À moyen terme

- Adoption progressive par les collectivités existantes
- Demandes d'intégration avec d'autres systèmes municipaux via l'API REST documentée Swagger
- Intérêt commercial accru grâce aux performances améliorées et à l'UX modernisée

### Aujourd'hui

- Luce V4 devient progressivement le standard de l'entreprise
- L'architecture microservices mise en place sert de référence pour les nouveaux projets
- Les bibliothèques partagées (jwt-auth, winston-logger, db-schema) sont réutilisées sur d'autres produits

## Regard critique

**Ce qui a bien fonctionné** : L'architecture modulaire de la V4 a permis à plusieurs développeurs de travailler en parallèle sans conflits. Le choix de SvelteKit s'est avéré excellent pour les performances et la maintenabilité. La séparation claire entre frontend et backend a facilité le développement et les tests.

**Ce que j'aurais fait différemment** : En V3, j'aurais mis en place plus tôt des outils de documentation partagée (Notion, ADR) pour fluidifier la coordination inter-modules. En V4, j'aurais prévu davantage de temps de formation collective sur les nouveaux outils (SvelteKit, Svelte 5) avant de démarrer le développement.

**Leçon apprise** : L'architecture technique doit refléter l'organisation de l'équipe (loi de Conway). Une migration technologique majeure nécessite un investissement significatif en formation et accompagnement pour garantir une adoption réussie par l'équipe.
