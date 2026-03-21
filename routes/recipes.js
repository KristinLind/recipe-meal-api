import express from "express";
import {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
} from "../controllers/recipeController.js";
import {
  recipeValidationRules,
  validate
} from "../middleware/validateRecipes.js"; 

const router = express.Router();
console.log("Recipes routes loaded");

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Get all recipes'
 */
router.get("/", getAllRecipes);

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Get a single recipe by ID'
 */
router.get("/:id", getSingleRecipe);

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Create a new recipe'
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   description: 'Recipe object',
 *   required: true,
 *   schema: {
        "name": "Chicken Alfredo",
        "ingredients": ["chicken", "pasta", "cream", "parmesan"],
        "instructions": "Cook pasta, prepare sauce, combine",
        "cookTime": 30,
        "difficulty": "Medium",
        "servings": 4,
        "category": "Dinner"
      }
 * }
 */
router.post("/", createRecipe);

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Update a recipe'
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   description: 'Updated recipe data',
 *   required: true,
 *   schema: {
        "difficulty": "Easy"
      }
 * }
 */
router.put("/:id", recipeValidationRules(), validate, updateRecipe);

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Delete a recipe'
 * #swagger.responses[200] = {
 *   description: 'Recipe deleted successfully'
 * }
 */
router.delete("/:id", deleteRecipe);

export default router;