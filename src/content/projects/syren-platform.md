---
title: 'Plateforme Syren'
shortDescription: "Plateforme web de gestion intelligente des déchets pour les collectivités, avec migration majeure d'Angular vers Svelte 5 et internationalisation complète."
thumbnail: '/images/projects/syren-thumbnail.jpg'
order: 1
relatedSkills:
  [
    'javascript-typescript',
    'frontend-frameworks',
    'nodejs-backend',
    'databases',
    'api-architecture',
    'teamwork',
    'communication',
    'problem-solving',
    'adaptability',
    'veille-technologique',
  ]
context:
  period: '2022 - 2025'
  role: 'Développeur Fullstack'
  company: 'BH Technologies'
---

## Présentation

Syren est une plateforme SaaS destinée aux collectivités territoriales pour la gestion intelligente de leurs déchets. Le système repose sur des capteurs à ultrasons installés dans les conteneurs (aériens ou enterrés) qui remontent en temps réel le niveau de remplissage via les réseaux LoRaWAN et cellulaires (NB-IoT, LTE-M). Ces capteurs, autonomes pendant 10 ans et résistants aux conditions difficiles (lavages haute pression, chocs), alimentent une interface web permettant aux gestionnaires d'optimiser les tournées de collecte.

L'enjeu principal est de réduire les coûts opérationnels des collectivités tout en améliorant la qualité du service. En chiffres : **40% d'économies sur les coûts de collecte**, un taux de remplissage moyen qui passe de 50% à 85%, et **25-30% de kilomètres parcourus en moins**. La plateforme intègre le système Redin pour le contrôle d'accès aux Points d'Apport Volontaire (PAV) et la supervision de la **redevance incitative** : contrôle par badge, QR code ou application mobile Ecopass, suivi des ouvertures de tambour, et gestion des foyers. L'écosystème comprend également l'application terrain Redin Tech pour la récupération des données via Bluetooth en zone sans réseau. Le projet est déployé notamment sur l'agglomération grenobloise, dans le cadre de la démarche smart city de BH Technologies.

## Objectifs, contexte, enjeu et risques

**Contexte** : Durant mon alternance chez BH Technologies, j'ai travaillé sur la plateforme Syren V3 (Angular) puis sur la refonte majeure Syren V4 (migration vers Svelte 5).

**Problématique V3** : Rationaliser la gestion de milliers de conteneurs et badges usagers pour plusieurs dizaines de collectivités avec une interface réactive et multilingue.

**Problématique V4** : Moderniser la stack technique pour améliorer les performances, la maintenabilité et préparer l'internationalisation avec un système i18n moderne.

**Objectifs** : Fournir une interface cartographique réactive et un back-office clair pour réduire les appels hotline, tout en supportant plusieurs langues pour les clients internationaux.

## Étapes – ce que j'ai fait

**Phase 1 - Ateliers utilisateurs** : Participation aux sessions de recueil de besoins avec les responsables déchets des collectivités pilotes. Observation des workflows existants, identification des pain points et priorisation des fonctionnalités avec l'équipe produit.

**Phase 2 - Conception UX** : Création de wireframes basse fidélité sur Penpot en collaboration avec l'UX designer. Itérations rapides avec des tests utilisateurs pour valider les parcours principaux (consultation carte, gestion des alertes, export de rapports).

**Phase 3 - Développement Syren V3** : Implémentation de l'interface en Angular 14 avec Angular Material et PrimeNG. Développement de la carte interactive (Park Map) avec Mapbox GL pour visualiser conteneurs et PAV, avec affichage des flux par type de déchets et taux de remplissage. Création du module de gestion des foyers (Foyer V3) avec listing, création et suivi des transactions pour la redevance incitative. Implémentation du système de badges virtuels avec gestion de la cohérence des données. Gestion des états temps-réel via RxJS et Socket.IO, et mise en place de l'internationalisation avec Transloco.

**Phase 4 - Développement backend** : Contribution au backend NestJS avec création d'APIs REST pour la gestion des conteneurs, des alertes et des statistiques. Intégration de la bibliothèque winston-logger pour le logging centralisé et de l'API Key management pour l'authentification inter-services.

**Phase 5 - Migration Syren V4** : Participation à la réécriture complète du frontend en Svelte 5 avec SvelteKit 2. Migration du système d'internationalisation vers Paraglide.js (Inlang) pour une meilleure expérience développeur. Intégration de Mapbox GL et Mapbox Draw pour l'édition cartographique avancée.

**Phase 6 - Accessibilité et qualité** : Audit et mise en conformité WCAG 2.1 AA. Ajout des attributs ARIA, gestion du focus clavier, tests avec lecteurs d'écran. Mise en place de tests unitaires avec Jest.

## Acteurs – les interactions

- **Équipe de développement** : Collaboration quotidienne avec les développeurs front-end Angular puis Svelte, et back-end NestJS. Pair programming, revues de code et partage de connaissances sur les patterns RxJS et les bonnes pratiques Svelte.
- **UX designer** : Travail en binôme sur les wireframes Penpot, itérations rapides sur les maquettes et participation aux tests utilisateurs.
- **Responsables déchets des collectivités** : Ateliers de recueil de besoins, démonstrations des prototypes et validation des parcours utilisateurs en conditions réelles.
- **Équipe support client** : Échanges réguliers pour identifier les fonctionnalités les plus demandées et les points de friction récurrents.
- **Product Owner** : Refinement des user stories, priorisation du backlog et validation des livrables en fin de sprint.
- **Équipe Luce** : Mutualisation de composants communs (authentification JWT, cartographie Mapbox, bibliothèques partagées db-schema) et partage d'expérience sur SvelteKit.

## Résultats

### Pour moi

- Pratique concrète de l'UX research via les ateliers utilisateurs
- RxJS maîtrisé en profondeur pour les flux temps-réel et Socket.IO
- Migration complète Angular 14 → Svelte 5 (réécriture de A à Z)
- Internationalisation avec Transloco (Angular) et Paraglide.js (Svelte)
- Accessibilité numérique : WCAG 2.1 AA, ce n'est plus un sujet flou pour moi
- Cartographie interactive avec Mapbox GL et Mapbox Draw
- Scrum pratiqué au quotidien pendant 3 ans

### Pour l'entreprise

- Interface cartographique nettement plus réactive grâce à Svelte 5 et aux optimisations de rendu
- Réduction des appels au support client grâce à une UX repensée
- Plateforme accessible conforme aux exigences des marchés publics (RGAA)
- Support multilingue facilité par Paraglide.js pour l'expansion internationale
- Architecture modulaire où ajouter une fonctionnalité ne casse pas le reste
- Performance améliorée avec Svelte 5 par rapport à Angular
- Retours positifs des utilisateurs lors des enquêtes de satisfaction

## Lendemains du projet

### Futur immédiat

- Formation des équipes support sur les nouvelles fonctionnalités Syren V4
- Création de la documentation utilisateur multilingue
- Déploiement progressif auprès des collectivités existantes

### À moyen terme

- Les retours utilisateurs sur la V4 sont bons
- Des demandes d'évolution sur l'édition cartographique commencent à arriver
- Le support multilingue attire de nouvelles collectivités à l'international

### Aujourd'hui

- Syren V4 est en production et marque la fin de la modernisation technique
- L'expérience de migration Angular → Svelte acquise sur ce projet a directement bénéficié à Luce V4
- Les patterns d'internationalisation Paraglide.js servent de référence pour les futurs projets

## Regard critique

**Ce qui a bien fonctionné** : Impliquer les utilisateurs finaux dès le début — l'interface est vraiment calée sur leurs besoins parce qu'on les a écoutés tôt. Le rythme Scrum avec des démos régulières a créé une boucle de feedback efficace. L'investissement sur l'accessibilité s'est avéré être un vrai différenciateur pour les marchés publics. Et la migration vers Svelte 5 a clairement amélioré les performances et le confort de développement.

**Ce que j'aurais fait différemment** : J'aurais dû anticiper plus tôt les problèmes de performance de la carte avec de gros volumes de conteneurs. La virtualisation et le lazy loading auraient dû être intégrés dès la conception initiale. Pour la migration V4, j'aurais prévu plus de temps pour former l'équipe sur les spécificités de Svelte 5 et son nouveau système de réactivité (runes).

**Leçon apprise** : Toujours tester avec des données représentatives de la production dès les premières phases. Un jeu de données de test ne révèle pas les mêmes problèmes qu'une collectivité avec plusieurs milliers de conteneurs. Une migration de framework majeure (Angular → Svelte) coûte cher en temps, mais ça se rentabilise vite côté performance et maintenabilité.
