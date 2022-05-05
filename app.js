const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
Recipe = require("./models/recipe");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/recipes");
const db = mongoose.mongoose.connection;

app.get("/", function (req, res) {
  res.send("Please, use /api/recipes or /api/ingredients");
});

app.get("/api/recipes", function (req, res) {
  Recipe.getRecipes(function (err, recipes) {
    if (err) {
      throw err;
    }
    res.json(recipes);
  });
});

app.get("/api/recipes/:name/ingredients", function (req, res) {
    console.log(req.params)
  Recipe.getIngredients(req.params, function (err, ingredients) {
    console.log(ingredients);
    // console.log(instructions.length);

    if (err) {
      throw err;
    }
    res.json(ingredients[0].ingredients + " " + ingredients[0].instructions.length);
  });
});

app.post("/api/recipes", function (req, res) {
  const recipe = req.body;
  Recipe.addRecipe(recipe, function (err, recipe) {
    if (err) {
      throw err;
    }
    res.json(recipe);
  });
});

app.put("/api/recipes/:_id", function (req, res) {
  const id = req.params._id;
  const recipe = req.body;
  Recipe.updateRecipe(id, recipe, {}, function (err, recipe) {
    if (err) {
      throw err;
    }
    res.json(recipe);
  });
});

app.delete("/api/recipes/:_id", function (req, res) {
  const id = req.params._id;
  Recipe.deleteRecipe(id, function (err, recipe) {
    if (err) {
      throw err;
    }
    res.json(recipe);
  });
});

app.listen(3000);
console.log("Running on port 3000...");
