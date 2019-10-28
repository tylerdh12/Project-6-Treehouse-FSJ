const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

router.get('/', (req, res) => {
    const { id } = req.params;

    res.render('index', { 
        projects: projects,
        name: data.name,
        avatar: data.avatar,
        projectName: data.project_name,
        about: data.about,
        id: projects.id,
        project_name: projects.project_name, 
        description: projects.description, 
        technologies: projects.technologies, 
        live_link: projects.live_link,
        github_link: projects.github_link, 
        image_urls: projects.image_urls, 
        status: projects.status
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        name: data.name,
        avatar: data.avatar,
        about: data.about,
        bio: data.bio,
        skills: data.skills,
        phone: data.phone,
        email: data.email,
        linkedin: data.linkedin_account,
        github: data.github_account,
        twitter: data.twitter_account,
    });
});

module.exports = router;