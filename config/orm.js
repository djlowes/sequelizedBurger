// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(table, cb) {
    connection.query('SELECT * FROM ' + table + ';', function(err, result) {
      if (err) throw err;
      cb(result)
    })
  },
  insertOne: function(table, val, cb) {
    connection.query("INSERT INTO " + table + " (burger_name) VALUES ('"+val+"');", function(err,result) {
      if(err) throw err;
      cb(result);
    })
  },
  updateOne: function(table, condition, cb) {
    connection.query('UPDATE ' + table + ' SET devoured=true WHERE id = ' + condition + ';', function(err, result) {
      console.log("Did this work?")
      if (err) throw err;
      cb(result);
    })
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
