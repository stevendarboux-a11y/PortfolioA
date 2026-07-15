---
title: "Connect'In"
excerpt: "Plateforme sociale collaborative avec authentification JWT et infrastructure Docker complète"
icon: "🔗"
tags: [Laravel, PHP, JavaScript, Tailwind CSS, MySQL, Docker]
tech: "Laravel, MySQL, Docker, Nginx, Vite, Tailwind CSS, Git, GitHub"
github: "https://github.com/stevendarboux-a11y/connectin_v1"
order: 4
---

## Description

Connect'In est une plateforme sociale collaborative permettant aux utilisateurs de partager des publications, d'interagir via des commentaires et des likes, et de gérer leur profil personnel, le tout dans une infrastructure entièrement conteneurisée avec Docker.

## Fonctionnalités

- Authentification sécurisée par token JWT (persistance en localStorage)
- Gestion de profil (bio, localisation, informations personnelles)
- Création, édition et suppression de publications avec support d'images
- Système de likes et de commentaires
- Filtrage par onglets ("Mes posts", "Mes commentaires", "Mes likes")
- Interface responsive avec menu hamburger et recherche

## Technologies utilisées

- **Front-end:** HTML5, JavaScript (ES6+), Tailwind CSS, Vite
- **Back-end:** Laravel (API REST)
- **Base de données:** MySQL
- **Infrastructure:** Docker Compose, Nginx (reverse proxy)

## Défis techniques

Le principal défi était de mettre en place une architecture découplée entre le front-end et l'API Laravel, tout en conteneurisant l'ensemble des services (PHP, base de données, reverse proxy) avec Docker pour garantir un environnement de développement cohérent entre les collaborateurs.
