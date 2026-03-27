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
 *     type: 'object',
 *     properties: {
 *       name: { type: 'string', example: 'Chicken Alfredo' },
 *       ingredients: {
 *         type: 'array',
 *         items: { type: 'string' },
 *         example: ['chicken', 'pasta']
 *       },
 *       instructions: { type: 'string', example: 'Cook it' },
 *       cookTime: { type: 'number', example: 30 },
 *       difficulty: { type: 'string', example: 'Medium' },
 *       servings: { type: 'number', example: 4 },
 *       category: { type: 'string', example: 'Dinner' }
 *     }
 *   }
 * }
 */outer.post("/", recipeValidationRules(), validate, createRecipe);

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Update a recipe'
 * #swagger.parameters['id'] = {
 *   in: 'path',
 *   required: true,
 *   type: 'string'
 * }
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   required: true,
 *   schema: {
 *     type: 'object',
 *     properties: {
 *       name: { type: 'string', example: 'Updated Recipe' },
 *       ingredients: {
 *         type: 'array',
 *         items: { type: 'string' },
 *         example: ['new ingredient']
 *       },
 *       instructions: { type: 'string', example: 'Updated instructions' },
 *       cookTime: { type: 'number', example: 25 },
 *       difficulty: { type: 'string', example: 'Easy' },
 *       servings: { type: 'number', example: 2 },
 *       category: { type: 'string', example: 'Lunch' }
 *     }
 *   }
 * }
 */
router.put("/:id", recipeValidationRules(), validate, updateRecipe);router.put("/:id", recipeValidationRules(), validate, updateRecipe);

/**
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Delete a recipe'
 */
router.delete("/:id", deleteRecipe);

export default router;