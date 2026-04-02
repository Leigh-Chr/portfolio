---
title: 'Transit Display Hub'
shortDescription: "Plateforme fullstack d'information voyageurs temps réel : affichage kiosk, carte réseau interactive et communication WebSocket."
thumbnail: '/images/projects/transit-display-hub-thumbnail.jpg'
fullImage: '/images/projects/transit-display-hub-full.jpg'
order: 7
links:
  repository: 'https://github.com/Leigh-Chr/transit-display-hub'
  website: 'https://leigh-chr.github.io/transit-display-hub/'
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
gallery:
  - src: '/images/projects/transit-dashboard.png'
    alt: 'Dashboard administrateur avec statistiques du réseau'
  - src: '/images/projects/transit-lines.png'
    alt: 'Gestion des lignes de transport (Tram, Bus)'
  - src: '/images/projects/transit-stops.png'
    alt: 'Liste des arrêts avec filtres par ligne et actions'
  - src: '/images/projects/transit-schedules.png'
    alt: 'Gestion des horaires par ligne et arrêt'
  - src: '/images/projects/transit-messages.png'
    alt: "Messages d'alerte avec niveaux de sévérité et portées"
context:
  period: '2026'
  role: 'Développeur Fullstack'
  company: 'Projet Personnel'
publishedDate: '2026-02-11'
modifiedDate: '2026-03-02'
---

## Présentation

Transit Display Hub est une plateforme fullstack d'information voyageurs pour les réseaux de transport en commun. L'application permet aux opérateurs de configurer leur réseau (lignes de métro, bus, tram, train), de gérer les horaires et de diffuser des messages d'alerte, le tout affiché en temps réel sur des écrans connectés aux arrêts via WebSocket.

Le projet couvre l'ensemble de la chaîne : une **interface d'administration** pour les opérateurs (gestion du réseau, des horaires, des messages et des appareils), un **affichage kiosk** public montrant les prochains départs et alertes en cours, et une **carte réseau interactive** avec calcul d'itinéraires par algorithme de Dijkstra.

L'architecture repose sur un backend **Spring Boot 4 / Java 21** avec une API REST de 10 contrôleurs et une communication temps réel via **WebSocket STOMP**, un frontend **Angular 21** avec Signals et Angular Material, et une base **PostgreSQL** avec migrations Flyway. Le projet totalise environ **6 000 lignes de Java** et **15 000 lignes de TypeScript** applicatifs, accompagnés de **plus de 1 500 tests** (JUnit 5 + Vitest).

Le déploiement est conteneurisé via **Docker Compose** avec trois services (PostgreSQL, backend Spring Boot, frontend Nginx), prêt pour la production.

## Objectifs, contexte, enjeu et risques

**Contexte** : Projet personnel pour me confronter à un domaine métier concret (l'information voyageurs temps réel) qui impose des contraintes fortes de performance, de fiabilité et de mise à jour instantanée.

**Problématique** : Les systèmes d'information voyageurs existants sont généralement des solutions propriétaires coûteuses et fermées. Il n'existe pas de plateforme open source complète couvrant à la fois la gestion du réseau, la diffusion temps réel et l'affichage sur écrans connectés.

**Objectifs** : Créer une plateforme production-ready combinant gestion du réseau de transport, diffusion de messages d'alerte multi-niveaux, affichage kiosk temps réel et carte réseau interactive avec calcul d'itinéraires.

**Risques identifiés** : Complexité de la synchronisation temps réel entre le serveur et potentiellement des centaines d'écrans connectés, gestion de la cohérence des données lors de modifications simultanées du réseau, et performances du calcul d'état d'affichage pré-calculé côté serveur.

## Étapes – ce que j'ai fait

**Phase 1 - Architecture et fondations** : Mise en place de l'architecture DDD (Domain-Driven Design) avec séparation en couches (domain, application, infrastructure, api). Configuration de Spring Boot 4 avec Spring Security, JWT, WebSocket STOMP et Spring Data JPA. Création du schéma PostgreSQL avec Flyway et des 9 tables du modèle de données.

**Phase 2 - Backend API et logique métier** : Développement des 11 services métier et 10 contrôleurs REST couvrant la gestion des lignes, arrêts, itinéraires, horaires, messages, appareils et utilisateurs. Implémentation du système de rôles (Admin/Agent) avec filtres de sécurité JWT. Mise en place du `DisplayStateCalculator` pour le pré-calcul des états d'affichage.

**Phase 3 - Frontend Angular et interface d'administration** : Création de l'interface d'administration avec Angular 21 et Angular Material. Développement des modules de gestion (dashboard, lignes, arrêts, horaires, messages, appareils, utilisateurs) avec composants standalone, Signals pour la réactivité et lazy loading des routes.

**Phase 4 - Temps réel et affichage kiosk** : Intégration WebSocket STOMP pour la diffusion en temps réel des mises à jour d'affichage. Développement du composant kiosk montrant les prochains départs par ligne avec alertes actives. Implémentation du système d'événements domaine (ScheduleChangedEvent, MessageChangedEvent, NetworkChangedEvent) déclenchant le recalcul automatique des états d'affichage.

**Phase 5 - Carte réseau et déploiement** : Développement de la carte réseau interactive avec algorithme de Dijkstra pour le calcul d'itinéraires et cache Caffeine pour les performances. Conteneurisation avec Docker multi-stage (JDK 21 + Nginx). Configuration Docker Compose 3 services. Mise en place de Husky, commitlint et lint-staged pour la qualité.

## Équipe

J'ai travaillé seul sur ce projet de bout en bout. Architecture DDD, développement backend Spring Boot et frontend Angular, mise en place du temps réel WebSocket, conteneurisation Docker et rédaction des tests : tout a été fait en autonomie.

## Résultats

- Spring Boot 4 et Java 21 : je suis maintenant à l'aise sur cette stack
- Angular 21 avec Signals, standalone components et mode zoneless
- Architecture DDD appliquée à un vrai domaine métier, pas juste en théorie
- Communication temps réel via WebSocket STOMP
- Conteneurisation Docker multi-service pour du déploiement production
- Plus de 1 500 tests écrits (JUnit 5 + Vitest)
- Plateforme fonctionnelle prête pour la production avec Docker Compose
- Interface d'administration complète pour la gestion du réseau de transport
- Affichage kiosk temps réel adapté aux écrans de toutes tailles
- Carte réseau interactive avec calcul d'itinéraires par algorithme de Dijkstra
- Système de messages d'alerte multi-niveaux (info, warning, critical) avec portées configurables (réseau, ligne, arrêt)
- API REST documentée avec 10 contrôleurs et authentification JWT
