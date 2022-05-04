const mongoose = require("mongoose");
const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  ingredients: {
    type: String,
    // required: true,
  },
  instructions: {
    type: String,
    // required: true,
  },

  create_date: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = (module.exports = mongoose.model("Recipe", recipeSchema));

module.exports.getRecipes = function (callback, limit) {
  Recipe.find(callback).limit(limit);
};

module.exports.addRecipe = function (recipe, callback) {
    Recipe.create(recipe, callback);
  };
  


