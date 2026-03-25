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
 *   required: true,
 *   schema: {
 *     name: "Chicken Alfredo",
 *     ingredients: ["chicken", "pasta"],
 *     instructions: "Cook it",
 *     cookTime: 30,
 *     difficulty: "Medium",
 *     servings: 4,
 *     category: "Dinner"
 *   }
 * }
 */
router.post("/", recipeValidationRules(), validate, createRecipe);

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Update a recipe'
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   required: true,
 *   schema: {
 *     name: "Updated Recipe",
 *     ingredients: ["new"],
 *     instructions: "Updated instructions"
 *   }
 * }
 */
router.put("/:id", recipeValidationRules(), validate, updateRecipe);

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Delete a recipe'
 */
router.delete("/:id", deleteRecipe);

export default router;