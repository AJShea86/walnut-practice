const mongoose = require("mongoose");
const recipeSchema = mongoose.Schema({
  name: {
    type: String,
  },
  ingredients: {
    type: Array,
  },
  instructions: {
    type: Array,
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

module.exports.updateRecipe = function (id, recipe, options, callback) {
  const query = { _id: id };
  const update = {
    name: recipe.name,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
  };
  Recipe.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteRecipe = function(id, callback){
    const query = {_id: id};

    Recipe.remove(query, callback);
}