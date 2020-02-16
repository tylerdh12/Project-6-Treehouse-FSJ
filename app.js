// Server Config
const port = process.env.PORT || 3000;

// Imports
const express = require("express");
const app = express();
const pug = require("pug");
const mainRoutes = require("./routes/index");
const project = require("./routes/projects");

// Require data to import to error
const { data } = require("./data.json");
const { projects } = data;

//Setup the view engine with pug templating
app.set("view engine", "pug");

// links public folder
app.use("/static", express.static("public"));

// Router
app.use("/", mainRoutes);
app.use("/project", project);

// Error Handler
app.use((req, res, next) => {
  const err = new Error("This Page is Not Available");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.error = err;
  console.error(err.status + " This Page Is Not Available");
  res.status(404);
  res.render("error", {
    projects: projects,
    name: data.name,
    avatar: data.avatar,
    projectName: data.project_name,
    about: data.about
  });
});

// Server
app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
