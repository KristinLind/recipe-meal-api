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
 * #swagger.requestBody = {
 *   required: true,
 *   content: {
 *     "application/json": {
 *       schema: {
 *         type: "object",
 *         properties: {
 *           name: { type: "string" },
 *           ingredients: { type: "array", items: { type: "string" } },
 *           instructions: { type: "string" },
 *           cookTime: { type: "number" },
 *           difficulty: { type: "string" },
 *           servings: { type: "number" },
 *           category: { type: "string" }
 *         }
 *       }
 *     }
 *   }
 * }
 */
router.post("/", recipeValidationRules(), validate, createRecipe);

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Update a recipe'
 * #swagger.requestBody = {
 *   required: true,
 *   content: {
 *     "application/json": {
 *       schema: {
 *         type: "object",
 *         properties: {
 *           name: { type: "string" },
 *           ingredients: { type: "array", items: { type: "string" } },
 *           instructions: { type: "string" }
 *         }
 *       }
 *     }
 *   }
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