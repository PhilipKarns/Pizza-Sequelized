



//ROUTES CODE GOES HERE
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  pizza.selectAll(function(data) {
    var hbsObject = {
      pizzas: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  pizza.insertOne([
    "pizza_name", "devoured"
  ], [
    req.body.pizza_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  pizza.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});
