// Server Config
const hostname = '127.0.0.1';
const port = 3000;

// Imports
const express = require('express');
const app = express();
const pug = require('pug');
const mainRoutes = require('./routes/index');
const project = require('./routes/projects');

//Setup the view engine with pug templating
app.set('view engine', 'pug');

// links public folder
app.use('/static', express.static('public'));

// Router
app.use('/', mainRoutes);
app.use('/project', project);

// Error Handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.render('error');
});

// Server 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});