---
title: "Connect'In — API Java Spring Boot"
excerpt: "Migration du back-end de Connect'In de Laravel vers une API REST Java Spring Boot"
icon: "☕"
tags: [Java, Spring Boot, Spring Security, MySQL, JWT, Docker]
tech: "Java 25, Spring Boot, Spring Security, Hibernate/JPA, MySQL, JWT, Docker, Maven, Git, GitHub"
github: "https://github.com/stevendarboux-a11y/V2_JAVA_Connectin"
order: 6
---

## Description

Réseau social professionnel développé dans le cadre du module Epitech W-JAV-101, ce projet consiste en la migration du back-end de Connect'In de Laravel vers une API REST en Java Spring Boot, couplée à un front React.

## Fonctionnalités

- Authentification par inscription/connexion avec JWT
- Gestion du profil utilisateur (consultation, modification, suppression, photo de profil)
- Création, modification et suppression de publications avec upload d'images
- Système de commentaires et de likes/unlikes sur les publications
- Sécurisation des routes via Spring Security et filtre JWT
- Infrastructure conteneurisée avec Docker Compose (API, front, MySQL, phpMyAdmin)

## Technologies utilisées

- **Back-end:** Java 25, Spring Boot, Spring Security
- **Persistance:** Hibernate/JPA, MySQL
- **Authentification:** JWT
- **Front-end:** React (interface consommant l'API)
- **Infrastructure:** Docker, Docker Compose, Maven

## Défis techniques

Le principal défi était de migrer une API existante de Laravel vers Spring Boot en conservant la parité fonctionnelle (auth, profils, posts, commentaires, likes), tout en mettant en place une architecture en couches claire (controller / service / repository / entity) et une sécurisation robuste des endpoints via Spring Security et JWT.

## Équipe

Projet réalisé en binôme dans le cadre du module W-JAV-101 à Epitech.
