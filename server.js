var express = require("express");

var app = express();
var PORT = 8889;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// INSERT INTO burgers (burger_name) VALUES ('Veggie Burger');
// INSERT INTO burgers (burger_name, devoured) VALUES ('Double Cheeseburger', true);
// INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Double Cheeseburger', true);
// INSERT INTO burgers (burger_name, devoured) VALUES ('Jalepeno Dbl Cheeseburger', false);
var burgers = [
  {
    burgerName: "Veggie Burger",
    devoured: "",
  }, {
    burgerName: "Double Cheeseburger",
    devoured: true,
  }, {
    burgerName: "Bacon Double Cheeseburger",
    devoured: true,
  },{
    burgerName: "Jalepeno Dbl Cheeseburger",
    devoured: false,
  },
];

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog handlebars file.
  // Lucky for us, animals[0] is an object!

  // 1. send the dog object from the animals array to the dog handlebars file.
  res.render("dog", burgers[0]);
});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 2. Loop through the animals, and send those that are pets to the index handlebars file.
  var data = {
    burgers: []
  };

  for (var i = 0; i < burgers.length; i += 1) {
    // Get the current animal.
    var currentBurger = burgers[i];

    // Check if this animal is a pet.
    if (currentBurger.pet) {
      // If so, push it into our data.animals array.
      data.burgers.push(currentBurger);
    }
  }

  res.render("index", data);
});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 3. Loop through the animals, and send those that are not pets to the index handlebars file.
  var data = {
    burgers: []
  };

  for (var i = 0; i < burgers.length; i += 1) {
    // Get the current animal.
    var currentBurger = burgers[i];

    // Check if this animal is a pet.
    if (!currentBurger.pet) {
      // If not, push it into our data.animals array.
      data.burgers.push(currentBurger);
    }
  }

  res.render("index", data);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});