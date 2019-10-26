const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

router.get('/', (req, res) => {
    const { id } = req.params;

    res.render('index', { 
        projects: projects,
        name: data.name,
        projectName: data.project_name,
        about: data.about,
        id: projects[1].id,
        project_name: projects[1].project_name, 
        description: projects[1].description, 
        technologies: projects[1].technologies, 
        live_link: projects[1].live_link,
        github_link: projects[1].github_link, 
        image_urls: projects[1].image_urls, 
        status: projects[1].status
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        name: data.name,
        about: data.about,
        bio: data.bio,
        phone: data.phone,
        email: data.email,
        linkedin: data.linkedin_account,
        github: data.github_account,
        twitter: data.twitter_account,
    });
});

module.exports = router;