const express = require('express');
const project = express.Router();
const { data } = require('../data.json');
const { projects } = data;

project.get('/', (req, res) => {
    res.redirect('project/0');
});

project.get('/:id', ( req, res ) => {
    res.render('project', { 
        projects: projects,
        name: data.name,
        avatar: data.avatar,
        projectName: data.project_name,
        about: data.about,
        id: projects[req.params.id].id,
        project_name: projects[req.params.id].project_name, 
        description: projects[req.params.id].description, 
        technologies: projects[req.params.id].technologies, 
        live_link: projects[req.params.id].live_link,
        github_link: projects[req.params.id].github_link, 
        image_urls: projects[req.params.id].image_urls, 
        status: projects[req.params.id].status
     });
});

project.use((err, req, res, next) => {
    res.locals.error = err;
    err.message = "This Project Doesn't Exist";
    err.status = 404;
    res.render('error', { 
        projects: projects,
        name: data.name,
        avatar: data.avatar,
        projectName: data.project_name,
        about: data.about,
    });
    if (err) {
        console.log('Sorry but the project your looking for in Not Available');
    }
});

module.exports = project;