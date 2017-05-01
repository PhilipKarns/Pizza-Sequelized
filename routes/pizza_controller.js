//dependencies
var express = require("express");
var router = express.Router();
// Import the model (pizza.js) to use its database functions.
var db = require("../models/pizza.js");

module.exports = function(app) {
  // GET route for getting all of the pizzas
  router.get("/", function(req, res) {
    db.Pizza.findAll({}).then(function(dbPizza) {
    var hbsObject = {
      pizzas: dbPizza
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });//findAll
  });//get

    // POST route for saving a new pizza
    router.post("/", function(req, res) {
      console.log(req.body);
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a text
      // and complete property (req.body)
      db.Pizza.create({
        pizza_name: req.body.pizza_name,
        devoured: req.body.devoured
      }).then(function(dbPizza) {
        // We have access to the new pizza as an argument inside of the callback function
        res.json(dbPizza);
        res.redirect("/");        
      });
    });

  // PUT route for updating pizzas. We can get the updated pizza data from req.body
  router.put("/:id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Pizza.update({
     pizza_name: req.body.pizza_name,
     devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbPizza) {
      res.json(dbPizza);
      res.redirect("/");
    });
  });
}//exports