---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-content">
    <p style="text-align: center; margin-bottom: 2rem;">
        Intéressé par une collaboration ? N'hésitez pas à me contacter !
    </p>
    
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="_replyto" required>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="btn">Envoyer</button>
    </form>
</div>
