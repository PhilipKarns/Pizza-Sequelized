// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/layouts/main.handlebars"));
  });

};

//here's the previous index route. I currently don't have an index.html file because handlebars is set up
//res.sendFile(path.join(__dirname + "../public/index.html"));