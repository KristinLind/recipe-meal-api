import Recipe from "../models/recipeModel.js";

// GET all recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); 
    res.status(200).json(recipes);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: "Error retrieving recipes", error: err.message });
  }
};

// GET single recipe
export const getSingleRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID format", error: err.message });
  }
};

// POST new recipe
export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();

    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ message: "Error creating recipe", error: err.message });
  }
};

// PUT update recipe
export const updateRecipe = async (req, res) => {
  try {
    const updated = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: "Error updating recipe", error: err.message });
  }
};

// DELETE recipe
export const deleteRecipe = async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid ID format", error: err.message });
  }
};