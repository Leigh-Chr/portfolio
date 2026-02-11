---
title: 'Transit Display Hub'
shortDescription: "Plateforme fullstack d'information voyageurs en temps réel pour les réseaux de transport, avec affichage kiosk, carte réseau interactive et communication WebSocket."
thumbnail: '/images/projects/transit-display-hub-thumbnail.svg'
order: 7
links:
  repository: 'https://github.com/Leigh-Chr/transit-display-hub'
relatedSkills:
  [
    'javascript-typescript',
    'frontend-frameworks',
    'databases',
    'api-architecture',
    'problem-solving',
    'adaptability',
    'veille-technologique',
  ]
context:
  period: '2026'
  role: 'Développeur Fullstack'
  company: 'Projet Personnel'
---

## Présentation

Transit Display Hub est une plateforme fullstack d'information voyageurs pour les réseaux de transport en commun. L'application permet aux opérateurs de configurer leur réseau (lignes de métro, bus, tram, train), de gérer les horaires et de diffuser des messages d'alerte, le tout affiché en temps réel sur des écrans connectés aux arrêts via WebSocket.

Le projet couvre l'ensemble de la chaîne : une **interface d'administration** pour les opérateurs (gestion du réseau, des horaires, des messages et des appareils), un **affichage kiosk** public montrant les prochains départs et alertes en cours, et une **carte réseau interactive** avec calcul d'itinéraires par algorithme A\*.

L'architecture repose sur un backend **Spring Boot 4 / Java 21** avec une API REST de 10 contrôleurs et une communication temps réel via **WebSocket STOMP**, un frontend **Angular 21** avec Signals et Angular Material, et une base **PostgreSQL** avec migrations Flyway. Le projet totalise environ **6 000 lignes de Java** et **27 000 lignes de TypeScript**, accompagnées de **1 494 tests** (JUnit 5 + Vitest + Playwright).

Le déploiement est conteneurisé via **Docker Compose** avec trois services (PostgreSQL, backend Spring Boot, frontend Nginx), prêt pour la production.

## Objectifs, contexte, enjeu et risques

**Contexte** : Projet personnel conçu pour démontrer la maîtrise du développement fullstack moderne avec un domaine métier concret — l'information voyageurs temps réel — qui impose des contraintes de performance, de fiabilité et de mise à jour instantanée.

**Problématique** : Les systèmes d'information voyageurs existants sont généralement des solutions propriétaires coûteuses et fermées. Il n'existe pas de plateforme open source complète couvrant à la fois la gestion du réseau, la diffusion temps réel et l'affichage sur écrans connectés.

**Objectifs** : Créer une plateforme production-ready combinant gestion du réseau de transport, diffusion de messages d'alerte multi-niveaux, affichage kiosk temps réel et carte réseau interactive avec calcul d'itinéraires.

**Risques identifiés** : Complexité de la synchronisation temps réel entre le serveur et potentiellement des centaines d'écrans connectés, gestion de la cohérence des données lors de modifications simultanées du réseau, et performances du calcul d'état d'affichage pré-calculé côté serveur.

## Étapes – ce que j'ai fait

**Phase 1 - Architecture et fondations** : Mise en place de l'architecture DDD (Domain-Driven Design) avec séparation en couches (domain, application, infrastructure, api). Configuration de Spring Boot 4 avec Spring Security, JWT, WebSocket STOMP et Spring Data JPA. Création du schéma PostgreSQL avec Flyway et des 8 tables du modèle de données.

**Phase 2 - Backend API et logique métier** : Développement des 11 services métier et 10 contrôleurs REST couvrant la gestion des lignes, arrêts, itinéraires, horaires, messages, appareils et utilisateurs. Implémentation du système de rôles (Admin/Agent) avec filtres de sécurité JWT. Mise en place du `DisplayStateCalculator` pour le pré-calcul des états d'affichage.

**Phase 3 - Frontend Angular et interface d'administration** : Création de l'interface d'administration avec Angular 21, Angular Material et Tailwind CSS. Développement des modules de gestion (dashboard, lignes, arrêts, horaires, messages, appareils, utilisateurs) avec composants standalone, Signals pour la réactivité et lazy loading des routes.

**Phase 4 - Temps réel et affichage kiosk** : Intégration WebSocket STOMP pour la diffusion en temps réel des mises à jour d'affichage. Développement du composant kiosk montrant les prochains départs par ligne avec alertes actives. Implémentation du système d'événements domaine (ScheduleChangedEvent, MessageChangedEvent, NetworkChangedEvent) déclenchant le recalcul automatique des états d'affichage.

**Phase 5 - Carte réseau et déploiement** : Développement de la carte réseau interactive avec algorithme A\* pour le calcul d'itinéraires et cache Caffeine pour les performances. Conteneurisation avec Docker multi-stage (JDK 21 + Nginx). Configuration Docker Compose 3 services. Mise en place de Husky, commitlint et lint-staged pour la qualité.

## Acteurs – les interactions

Bien que ce soit un projet personnel, plusieurs acteurs ont contribué à son évolution :

- **Communauté open source** : Retours via les issues GitHub sur l'ergonomie du dashboard d'administration et la configuration du réseau
- **Opérateurs de transport simulés** : Scénarios de test réalistes avec des réseaux multi-lignes, des perturbations et des messages d'alerte de différentes sévérités
- **Communauté Spring Boot** : Échanges sur les forums pour les patterns avancés de Spring Boot 4 (événements domaine, WebSocket STOMP, caching Caffeine)
- **Communauté Angular** : Discussions sur l'adoption des Signals, le mode zoneless et les standalone components avec Angular 21

## Résultats

### Pour moi

- Maîtrise de Spring Boot 4 et de l'écosystème Java 21 pour le développement backend
- Expertise en Angular 21 avec Signals, standalone components et mode zoneless
- Compétences en architecture DDD appliquée à un domaine métier concret
- Maîtrise de la communication temps réel via WebSocket STOMP
- Expérience en conteneurisation Docker multi-service pour le déploiement production
- Capacité à produire une couverture de tests complète (1 494 tests)

### Pour les utilisateurs

- Plateforme fonctionnelle prête pour la production avec Docker Compose
- Interface d'administration complète pour la gestion du réseau de transport
- Affichage kiosk temps réel adapté aux écrans de toutes tailles
- Carte réseau interactive avec calcul d'itinéraires par algorithme A\*
- Système de messages d'alerte multi-niveaux (info, warning, critical) avec portées configurables (réseau, ligne, arrêt)
- API REST documentée avec 10 contrôleurs et authentification JWT

## Lendemains du projet

### Futur immédiat

- Ajout de données GTFS (General Transit Feed Specification) pour l'import de réseaux réels
- Amélioration de la carte réseau avec géolocalisation des arrêts
- Monitoring des appareils connectés avec alertes de déconnexion

### À moyen terme

- Application mobile pour les voyageurs avec notifications push
- Intégration de données de géolocalisation des véhicules en temps réel
- Multi-tenancy pour gérer plusieurs réseaux de transport

### Aujourd'hui

- Le projet est fonctionnel et déployable en production via Docker
- L'architecture DDD permet d'ajouter de nouveaux domaines sans régressions
- La couverture de tests (1 494 tests) garantit la stabilité lors des évolutions

## Regard critique

**Ce qui a bien fonctionné** : L'architecture DDD avec séparation stricte des couches a permis un développement rapide et structuré en seulement 7 jours. Le pré-calcul des états d'affichage côté serveur via les événements domaine élimine les problèmes de performance N+1 côté client. Le choix de WebSocket STOMP offre une communication temps réel fiable avec reconnexion automatique.

**Ce que j'aurais fait différemment** : J'aurais dû implémenter le format GTFS dès le départ pour permettre l'import de données de réseaux réels plutôt que la saisie manuelle. J'aurais également intégré des tests de charge pour valider le comportement avec des centaines d'écrans connectés simultanément.

**Leçon apprise** : La combinaison événements domaine + WebSocket + état pré-calculé est un pattern puissant pour les systèmes d'information temps réel. Elle découple la logique métier de la diffusion et garantit que chaque écran reçoit un état cohérent sans recalcul côté client.
