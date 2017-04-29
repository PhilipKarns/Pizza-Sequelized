//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//create server and set default port
var app = express();
var port = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// USED THIS THE FIRST TIME. REMOVE?Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));



//handlebars boilerplate
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes =============================================================

require("./routes/html-routes.js")(app);
//require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
	app.listen(port, function() {
	  console.log("Listening on PORT " + port);
	});//listener
});//sequelize sync


// // Create `ExpressHandlebars` instance with a default layout.
// handlebars = exphbs.create({
//     defaultLayout: 'main',
//     extname      : '.html', //set extension to .html so handlebars knows what to look for
// });

// // Register `hbs` as our view engine using its bound `engine()` function.
// // Set html in app.engine and app.set so express knows what extension to look for.
// app.engine('html', handlebars.engine);
// app.set('view engine', 'html');