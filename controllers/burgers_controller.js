var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burgerNameHtml
  ], function() {
    res.redirect("/");
  });
  // burger.insertOne([
  //   "burger_name", "devoured"
  // ], [
  //   req.body.burgerNameHtml, req.body.devouredHtml
  // ], function() {
  //   res.redirect("/");
  // });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devouredHtml
  }, condition, function() {
    res.redirect("/");
  });
});

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;