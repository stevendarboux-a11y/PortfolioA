---
layout: page
title: Mes Projets
permalink: /projets/
---

<div class="projects-grid">
    {% for project in site.projects %}
    <div class="project-card">
        <div class="project-image">{{ project.icon | default: "🚀" }}</div>
        <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.excerpt }}</p>
            <div class="project-tags">
                {% for tag in project.tags %}
                <span class="tag">{{ tag }}</span>
                {% endfor %}
            </div>
            <a href="{{ project.url | relative_url }}" class="btn-small">Voir le projet</a>
        </div>
    </div>
    {% endfor %}
</div>
