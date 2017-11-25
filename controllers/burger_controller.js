var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(result) {
    // console.log(result);
    res.render("index", {result});
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
      // console.log(result);
      res.redirect('/');
  });
});

router.put('/burgers/update', function(req,res) {
    burger.updateOne(req.body.burger_id, function(result) {
      console.log(result)
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;
