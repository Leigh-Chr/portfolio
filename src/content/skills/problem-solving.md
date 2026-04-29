---
title: 'Résolution de problèmes'
category: 'human'
group: 'personal'
level: 8
icon: 'puzzle'
order: 8
relatedProjects:
  ['syren-platform', 'luce-platform', 'appstandard', 'tidy-app', 'cahnon', 'transit-display-hub']
summary: 'Approche méthodique pour analyser, décomposer et résoudre des problèmes techniques de manière efficace.'
publishedDate: '2026-01-20'
modifiedDate: '2026-02-20'
---

## En bref

Chaque bug à corriger, chaque fonctionnalité à implémenter, c'est un puzzle. Ma méthode n'a pas changé depuis le début : d'abord comprendre et reproduire le problème de manière isolée, puis le découper en morceaux plus petits. Ça paraît basique, mais dans le contexte IoT de BH Technologies où un bug peut venir de n'importe quelle couche (capteur, réseau, backend, frontend), c'est la seule approche qui marche.

## En pratique

### Débogage multicouche dans l'IoT

Chez BH Technologies, quand quelque chose ne marche pas, le bug peut se cacher n'importe où : capteur physique, réseau LoRaWAN, backend, ou frontend. J'ai appris à ne pas sauter aux conclusions et à remonter méthodiquement la chaîne avec les logs. Breakpoints conditionnels, débogage pas-à-pas, et parfois le bon vieux "rubber duck debugging" — expliquer le problème à voix haute pour le comprendre.

### Refonte des rapports Syren V3

Les rapports IoT de **[Syren V3](/projects/syren-platform)** étaient illisibles et généraient beaucoup de tickets de clarification au support. J'ai observé comment les utilisateurs les consultaient en vrai, puis j'ai refondu la mise en page : graphiques lisibles, information priorisée, exports PDF propres. Les demandes d'explication ont nettement baissé après ça.

### Implémentation des RRULE dans AppStandard

Sur **[AppStandard](/projects/appstandard)**, j'ai dû implémenter le parsing des règles de récurrence (RRULE) du standard RFC 5545. Ces règles peuvent être extrêmement complexes (récurrences avec exceptions, fuseaux horaires, limites). J'ai décomposé le problème en sous-parsers, écrit des tests exhaustifs, et itéré jusqu'à gérer tous les cas edge. Au final, le parser gère correctement les fichiers .ics de Google, Apple et Outlook.
